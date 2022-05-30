import { Injectable } from "@nestjs/common";
import { join } from "path";
import { YogaDriverConfig, YogaDriverConfigFactory } from "../../../../src";

@Injectable()
export class ConfigService implements YogaDriverConfigFactory {
  public createGqlOptions(): Partial<YogaDriverConfig> {
    return {
      typePaths: [join(__dirname, "../**/*.graphql")],
    };
  }
}
