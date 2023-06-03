import AWS, { Credentials } from "aws-sdk";
import { PutItemInputAttributeMap } from "aws-sdk/clients/dynamodb";

export const getDynamoTableName = (territory: string, environment: string) =>
  `${territory}-${environment}-db`;


export async function saveMessage(
    region: string,
    table: string,
    item: PutItemInputAttributeMap,
    credentials: Credentials
  ) {
    AWS.config.update({ region });
    console.log({ method: "saveMessage", region, table, item });
  
    // Create the DynamoDB service object
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10", credentials });
  
    const params = {
      TableName: table,
      Item: item,
    };
  
    // Call DynamoDB to add the item to the table
    const res = await ddb
      .putItem(params, function (err, data) {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (err) {
          console.log("DynamoDB Write Error", err);
        } else {
          console.log("DynamoDB Write Success", data);
        }
      })
      .promise();
  
    return res;
  }