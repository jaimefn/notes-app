import DynamoDBStack from "./DynamoDBStack";
import S3Stack from "./S3Stack";
import s3Stack from "./S3Stack";

// Add stacks
export default function main(app) {
  new DynamoDBStack(app, "dynamodb");
  new S3Stack(app,"s3");
}