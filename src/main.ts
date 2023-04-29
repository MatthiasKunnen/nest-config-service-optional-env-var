import {ConfigService} from '@nestjs/config';
import {NestFactory} from '@nestjs/core';

import {AppModule} from './app.module';
import {EnvironmentVariables} from './env.validator';

async function bootstrap() {
    const app = await NestFactory.create(
        AppModule,
    );

    const configService: ConfigService<EnvironmentVariables, true> = app.get(ConfigService);
    const optValue = configService.get(
        'OPT',
        {infer: true},
    )
    console.log(`typeof optValue is ${typeof optValue}. Value is ${optValue}`);

    await app.listen(5546, '0.0.0.0');
}

bootstrap().catch(error => {
    console.error(error);
});
