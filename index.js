const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } =require("@aws-sdk/util-dynamodb");

(async () => {
  const client = new DynamoDBClient({ region: "us-east-1", 
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }});
  const input = {
    TableName: "Key-animations",
    SELECT: "ALL_ATTRIBUTES",
    consistentRead: true,
  };
  const command = new ScanCommand(input);
  try {
    const results = await client.send(command);
    const randomIndex = Math.floor(Math.random() * results.Items.length)
    console.log(unmarshall(results.Items[randomIndex]));
  } catch (err) {
    console.error(err);
  }
})();
