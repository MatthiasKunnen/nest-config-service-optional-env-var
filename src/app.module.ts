import {ConfigModule} from '@nestjs/config';
import {validateEnvironmentVariables} from './env.validator';
import {Module} from '@nestjs/common';

@Module({
    imports: [
        ConfigModule.forRoot({
            validate: validateEnvironmentVariables,
            isGlobal: true,
        }),
    ],
})
export class AppModule {
}
