import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TeamsModule } from './teams/teams.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TasksModule, TeamsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
