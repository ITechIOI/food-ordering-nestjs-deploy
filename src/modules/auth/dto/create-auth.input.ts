import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
