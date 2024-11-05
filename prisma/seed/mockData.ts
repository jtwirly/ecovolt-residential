import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('9481d79b-e2c0-4562-bd7f-aa94273d83cf', '1Karl96@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv112233', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('7485d89c-9e3e-4293-b696-34bdc74fed17', '9Aniyah97@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv123456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f0fca178-163c-449e-9e9b-2d93e0053b3a', '17Kathlyn_King72@yahoo.com', 'Michael Johnson', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv654321', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('e3ea383f-933b-4302-adec-e34422a4fde8', '25Darius6@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv112233', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c01df9e9-df95-4498-a6f9-5628092193f1', '33Louisa78@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv445566', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('bc7a7f11-b8c3-4d0c-b306-0a631296980f', '41Asa.Cummings@yahoo.com', 'Michael Johnson', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv445566', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('16828221-46c2-4d76-b084-5c8e1b2eeea1', '49Nella.Wisoky@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv445566', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('16f6bf07-46c1-4c75-a6fb-b08aef2257ab', '57Fanny47@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv112233', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('2c4c8576-bea1-47d7-bf3b-2046840a1614', '65Esteban90@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv123456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('9ead978c-b61e-4742-85d2-db6b5d2dc8d1', 'Daily notifications for peak energy usage times.', '16f6bf07-46c1-4c75-a6fb-b08aef2257ab');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('1efd4d2b-c961-4fcd-a493-75836cf55d75', 'Custom recommendations for reducing carbon footprint.', 'bc7a7f11-b8c3-4d0c-b306-0a631296980f');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('25597cfa-cf20-4d2c-b8d1-e0094681186d', 'Monthly energy usage report and tips for optimization.', 'c01df9e9-df95-4498-a6f9-5628092193f1');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('9ecfdc0b-4b18-4961-a7d0-3f070ba8d90d', 'Weekly insights on energy consumption patterns.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('45e9cfbb-1315-40ef-aabf-536d1cf49745', 'Realtime solar panel efficiency updates.', '2c4c8576-bea1-47d7-bf3b-2046840a1614');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('2326a609-04de-4ce3-8879-772cd7877349', 'Daily notifications for peak energy usage times.', '16828221-46c2-4d76-b084-5c8e1b2eeea1');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('f5c230c6-1971-49b3-957d-dbf1bab540d4', 'Monthly energy usage report and tips for optimization.', '16f6bf07-46c1-4c75-a6fb-b08aef2257ab');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('c939cd59-e00a-4d25-abea-943665ec6dcd', 'Weekly insights on energy consumption patterns.', '16828221-46c2-4d76-b084-5c8e1b2eeea1');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('646c2375-cd14-4673-abe6-ffa6506c993d', 'Realtime solar panel efficiency updates.', '9481d79b-e2c0-4562-bd7f-aa94273d83cf');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('1a86eca9-1e2e-4671-a57c-7694796841fa', 'Custom recommendations for reducing carbon footprint.', '2c4c8576-bea1-47d7-bf3b-2046840a1614');

INSERT INTO "EnergyUsage" ("id", "timestamp", "consumption", "unit", "userId") VALUES ('8b494ea3-98ff-46da-acaf-963a71b11742', '2024-07-31T16:35:12.737Z', '8.7', 'kWh', '16828221-46c2-4d76-b084-5c8e1b2eeea1');
INSERT INTO "EnergyUsage" ("id", "timestamp", "consumption", "unit", "userId") VALUES ('02d9dd09-635f-49ad-8589-5be0dcee36e0', '2025-06-30T01:45:20.689Z', '12.1', 'kWh', 'e3ea383f-933b-4302-adec-e34422a4fde8');
INSERT INTO "EnergyUsage" ("id", "timestamp", "consumption", "unit", "userId") VALUES ('9f946e78-a17f-4f20-b6ab-edcc51743a5c', '2024-05-06T13:24:06.624Z', '8.7', 'kWh', '2c4c8576-bea1-47d7-bf3b-2046840a1614');
INSERT INTO "EnergyUsage" ("id", "timestamp", "consumption", "unit", "userId") VALUES ('cb892ace-a5a5-4c93-b8a2-12b347dabe35', '2025-07-28T14:51:22.477Z', '19.8', 'kWh', '16828221-46c2-4d76-b084-5c8e1b2eeea1');
INSERT INTO "EnergyUsage" ("id", "timestamp", "consumption", "unit", "userId") VALUES ('d491db47-19fe-4a1c-9a3e-163b6b611a57', '2024-03-31T13:54:18.902Z', '12.1', 'kWh', 'bc7a7f11-b8c3-4d0c-b306-0a631296980f');
INSERT INTO "EnergyUsage" ("id", "timestamp", "consumption", "unit", "userId") VALUES ('f26ab7cc-3cd6-4fc2-acfb-8e6a5425ffc4', '2025-01-23T07:30:07.101Z', '23.5', 'kWh', '9481d79b-e2c0-4562-bd7f-aa94273d83cf');
INSERT INTO "EnergyUsage" ("id", "timestamp", "consumption", "unit", "userId") VALUES ('ee648aaf-3e1a-488e-936a-1a0052a96a05', '2025-05-29T19:44:39.062Z', '15.2', 'kWh', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EnergyUsage" ("id", "timestamp", "consumption", "unit", "userId") VALUES ('ff8ed7f5-524e-4b57-a9ba-73b7d394f4fa', '2025-08-20T05:10:20.807Z', '19.8', 'kWh', 'f0fca178-163c-449e-9e9b-2d93e0053b3a');
INSERT INTO "EnergyUsage" ("id", "timestamp", "consumption", "unit", "userId") VALUES ('06a8e562-03fd-4329-9cc3-c194f86e40d0', '2024-10-07T08:10:30.379Z', '23.5', 'kWh', 'c01df9e9-df95-4498-a6f9-5628092193f1');
INSERT INTO "EnergyUsage" ("id", "timestamp", "consumption", "unit", "userId") VALUES ('d06019ac-5f44-437c-a105-bfc5ecbca5fb', '2024-09-20T16:07:10.105Z', '12.1', 'kWh', '16f6bf07-46c1-4c75-a6fb-b08aef2257ab');

INSERT INTO "RenewableEnergy" ("id", "sourceType", "capacity", "installationDate", "userId") VALUES ('7012b3eb-5348-4e7c-a548-d5c378f7edf8', 'Biomass', '10 kW', '2025-02-28T17:20:34.050Z', 'bc7a7f11-b8c3-4d0c-b306-0a631296980f');
INSERT INTO "RenewableEnergy" ("id", "sourceType", "capacity", "installationDate", "userId") VALUES ('896a76d8-d22d-4ce6-88f4-f7ab840cb559', 'Biomass', '20 kW', '2025-01-10T16:07:04.003Z', '7485d89c-9e3e-4293-b696-34bdc74fed17');
INSERT INTO "RenewableEnergy" ("id", "sourceType", "capacity", "installationDate", "userId") VALUES ('dbdf3678-abdf-4580-8e93-887f72e9abe5', 'Geothermal', '10 kW', '2024-10-17T13:41:29.981Z', '9481d79b-e2c0-4562-bd7f-aa94273d83cf');
INSERT INTO "RenewableEnergy" ("id", "sourceType", "capacity", "installationDate", "userId") VALUES ('f46261ae-f35d-44a3-8c4f-18fd533001cf', 'Wind', '5 kW', '2025-02-20T17:52:07.248Z', 'c01df9e9-df95-4498-a6f9-5628092193f1');
INSERT INTO "RenewableEnergy" ("id", "sourceType", "capacity", "installationDate", "userId") VALUES ('45ebde4f-0655-4d5b-a872-275e9b118121', 'Hydro', '5 kW', '2024-03-24T05:49:18.126Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "RenewableEnergy" ("id", "sourceType", "capacity", "installationDate", "userId") VALUES ('72b0b22a-e26e-42e5-b783-282a13b984e0', 'Solar', '25 kW', '2024-09-25T21:39:05.336Z', '16828221-46c2-4d76-b084-5c8e1b2eeea1');
INSERT INTO "RenewableEnergy" ("id", "sourceType", "capacity", "installationDate", "userId") VALUES ('652f805b-b37b-4684-8ba9-d4ce1ad52be5', 'Hydro', '25 kW', '2024-12-29T12:53:59.125Z', 'bc7a7f11-b8c3-4d0c-b306-0a631296980f');
INSERT INTO "RenewableEnergy" ("id", "sourceType", "capacity", "installationDate", "userId") VALUES ('e28501d6-8651-4044-9e64-cee44217a606', 'Hydro', '10 kW', '2025-08-16T06:39:12.500Z', '9481d79b-e2c0-4562-bd7f-aa94273d83cf');
INSERT INTO "RenewableEnergy" ("id", "sourceType", "capacity", "installationDate", "userId") VALUES ('ca0d73e3-1092-4229-b1da-d62a1ad737e5', 'Wind', '25 kW', '2025-04-06T08:00:20.380Z', 'bc7a7f11-b8c3-4d0c-b306-0a631296980f');
INSERT INTO "RenewableEnergy" ("id", "sourceType", "capacity", "installationDate", "userId") VALUES ('a3904950-f702-418d-a30f-dccdbed77c06', 'Solar', '15 kW', '2024-12-03T12:57:17.066Z', 'c01df9e9-df95-4498-a6f9-5628092193f1');

INSERT INTO "SmartDevice" ("id", "deviceName", "deviceType", "status", "lastUpdated", "userId") VALUES ('3b5a3ed3-a88b-4f71-adb6-e9ffddfe83ce', 'ChargeMaster', 'EV Charger', 'Updating', '2024-03-02T03:35:15.373Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "SmartDevice" ("id", "deviceName", "deviceType", "status", "lastUpdated", "userId") VALUES ('c9219142-b3bf-4893-a0b3-aabebdb80f83', 'PowerSaver', 'EV Charger', 'Inactive', '2024-03-19T04:54:46.467Z', 'c01df9e9-df95-4498-a6f9-5628092193f1');
INSERT INTO "SmartDevice" ("id", "deviceName", "deviceType", "status", "lastUpdated", "userId") VALUES ('145108e0-c90a-4428-a585-254482964eca', 'PowerSaver', 'Energy Monitor', 'Fault', '2024-10-11T10:05:18.242Z', '7485d89c-9e3e-4293-b696-34bdc74fed17');
INSERT INTO "SmartDevice" ("id", "deviceName", "deviceType", "status", "lastUpdated", "userId") VALUES ('4280969f-3a2a-4b41-afcd-45e9a994a7eb', 'PowerSaver', 'Energy Monitor', 'Updating', '2025-04-06T18:25:45.569Z', '7485d89c-9e3e-4293-b696-34bdc74fed17');
INSERT INTO "SmartDevice" ("id", "deviceName", "deviceType", "status", "lastUpdated", "userId") VALUES ('ea091501-c002-4948-b385-a1844c8a5714', 'SolarSync', 'Solar Inverter', 'Inactive', '2024-07-18T14:06:45.935Z', 'bc7a7f11-b8c3-4d0c-b306-0a631296980f');
INSERT INTO "SmartDevice" ("id", "deviceName", "deviceType", "status", "lastUpdated", "userId") VALUES ('e615f946-7342-4b28-98dd-bfa32700f28a', 'EcoTherm', 'Solar Inverter', 'Active', '2024-08-08T20:48:55.796Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "SmartDevice" ("id", "deviceName", "deviceType", "status", "lastUpdated", "userId") VALUES ('2f4fc91d-4fe2-4aa2-a9ab-ae8384ad872a', 'WindWave', 'Energy Monitor', 'Active', '2025-09-25T23:38:17.111Z', '16f6bf07-46c1-4c75-a6fb-b08aef2257ab');
INSERT INTO "SmartDevice" ("id", "deviceName", "deviceType", "status", "lastUpdated", "userId") VALUES ('b21f5aef-fb90-4b02-b185-496de0032659', 'PowerSaver', 'Energy Monitor', 'Active', '2024-01-07T10:18:18.177Z', 'e3ea383f-933b-4302-adec-e34422a4fde8');
INSERT INTO "SmartDevice" ("id", "deviceName", "deviceType", "status", "lastUpdated", "userId") VALUES ('86d54b80-10a0-4a9a-8cf2-516c61c4c9af', 'EcoTherm', 'Solar Inverter', 'Fault', '2025-03-03T00:09:05.270Z', '7485d89c-9e3e-4293-b696-34bdc74fed17');
INSERT INTO "SmartDevice" ("id", "deviceName", "deviceType", "status", "lastUpdated", "userId") VALUES ('5c5c49e8-12dc-4696-a1a7-85aed69b3874', 'ChargeMaster', 'Solar Inverter', 'Active', '2025-03-28T16:10:18.613Z', 'f0fca178-163c-449e-9e9b-2d93e0053b3a');

INSERT INTO "EnergyMarket" ("id", "marketName", "currentPrice", "currency", "lastUpdated") VALUES ('1bb6b150-70e8-4247-a9ca-e4a00ed72039', 'European Energy Market', '0.18', 'JPY', '2025-01-14T18:33:22.911Z');
INSERT INTO "EnergyMarket" ("id", "marketName", "currentPrice", "currency", "lastUpdated") VALUES ('2254def2-63cd-4a3a-bea3-3da81cdb61ba', 'AsiaPacific Energy Hub', '0.12', 'USD', '2025-03-07T08:54:32.811Z');
INSERT INTO "EnergyMarket" ("id", "marketName", "currentPrice", "currency", "lastUpdated") VALUES ('2f7711f5-a1a2-4709-a91a-2d488429e83d', 'Latin American Energy Exchange', '0.18', 'JPY', '2025-04-28T13:35:00.742Z');
INSERT INTO "EnergyMarket" ("id", "marketName", "currentPrice", "currency", "lastUpdated") VALUES ('1dad6e72-e42d-4167-ba59-530e80de5790', 'European Energy Market', '0.18', 'USD', '2025-09-10T20:29:31.008Z');
INSERT INTO "EnergyMarket" ("id", "marketName", "currentPrice", "currency", "lastUpdated") VALUES ('addf5aaf-91bd-46d1-b9ce-657e7b25e091', 'North American Power Exchange', '0.10', 'USD', '2024-09-11T11:10:08.138Z');
INSERT INTO "EnergyMarket" ("id", "marketName", "currentPrice", "currency", "lastUpdated") VALUES ('b29509de-de96-4819-99d1-97a4b6397a0b', 'North American Power Exchange', '0.10', 'EUR', '2024-11-26T16:24:29.892Z');
INSERT INTO "EnergyMarket" ("id", "marketName", "currentPrice", "currency", "lastUpdated") VALUES ('47d30025-a8a8-493c-ad40-5aa3a856f945', 'European Energy Market', '0.12', 'USD', '2025-09-12T20:25:12.378Z');
INSERT INTO "EnergyMarket" ("id", "marketName", "currentPrice", "currency", "lastUpdated") VALUES ('9ee64c54-caed-44dd-8c7e-e68309a2ff29', 'Middle East Energy Market', '0.15', 'JPY', '2024-08-22T13:44:13.932Z');
INSERT INTO "EnergyMarket" ("id", "marketName", "currentPrice", "currency", "lastUpdated") VALUES ('9d51674b-ecb0-471f-9635-d4e4a173adf9', 'Middle East Energy Market', '0.18', 'JPY', '2023-12-17T03:12:23.907Z');
INSERT INTO "EnergyMarket" ("id", "marketName", "currentPrice", "currency", "lastUpdated") VALUES ('26f2afeb-1fd4-4a64-973b-6155a767c8cd', 'AsiaPacific Energy Hub', '0.12', 'EUR', '2025-07-08T09:03:54.388Z');

INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('6ec80c66-536f-4a22-869e-9906733476ac', 'Premium', '2024-10-08T18:20:48.211Z', '2024-01-28T11:38:16.625Z', 'Expired', '2c4c8576-bea1-47d7-bf3b-2046840a1614');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('fbdf5b32-66fd-46b0-a84d-e51c41923f50', 'Premium', '2025-08-07T06:34:27.694Z', '2025-04-22T15:56:24.205Z', 'Active', '16f6bf07-46c1-4c75-a6fb-b08aef2257ab');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('8ce045d5-ca0e-42e7-98fe-ee3bad4451a6', 'Enterprise', '2025-03-01T15:15:00.381Z', '2024-03-15T08:56:11.749Z', 'Pending', 'f0fca178-163c-449e-9e9b-2d93e0053b3a');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('4ac97a21-19fb-4bf8-a939-095c9f0916e0', 'Family', '2023-11-08T23:28:11.656Z', '2024-04-28T04:52:55.923Z', 'Expired', 'c01df9e9-df95-4498-a6f9-5628092193f1');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('4e290a95-3320-48e8-894d-140bd664bc84', 'Family', '2024-12-29T00:39:54.066Z', '2025-01-22T18:28:53.165Z', 'Pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('84c538aa-5eee-4126-9a9e-c528560f611e', 'Family', '2025-08-05T19:36:27.374Z', '2024-04-25T15:59:28.098Z', 'Pending', 'f0fca178-163c-449e-9e9b-2d93e0053b3a');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('7996629b-62d5-4863-8de1-29e23b40adf7', 'Family', '2025-04-10T06:56:43.781Z', '2024-03-17T22:22:01.870Z', 'Inactive', '16f6bf07-46c1-4c75-a6fb-b08aef2257ab');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('ca4c5727-a03d-460a-8325-6ee4ad875f37', 'Premium', '2024-08-21T12:27:09.065Z', '2025-03-07T21:28:44.432Z', 'Inactive', 'c01df9e9-df95-4498-a6f9-5628092193f1');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('8d652fc7-3fa2-4684-a647-50fc3d5b21cf', 'Basic', '2025-04-20T00:52:56.232Z', '2025-06-18T12:04:23.029Z', 'Inactive', '7485d89c-9e3e-4293-b696-34bdc74fed17');
INSERT INTO "Subscription" ("id", "planName", "startDate", "endDate", "status", "userId") VALUES ('5e919306-1458-49fe-8f80-aded86cabcd7', 'Basic', '2024-04-09T23:12:11.353Z', '2025-04-14T17:42:58.768Z', 'Active', 'bc7a7f11-b8c3-4d0c-b306-0a631296980f');

INSERT INTO "EnergySavingGoal" ("id", "targetConsumption", "startDate", "endDate", "status", "userId") VALUES ('9f74360a-eef2-4f84-97a8-f33f3d127927', '700 kWh', '2024-05-05T17:39:59.437Z', '2023-12-26T22:03:51.460Z', 'Completed', 'f0fca178-163c-449e-9e9b-2d93e0053b3a');
INSERT INTO "EnergySavingGoal" ("id", "targetConsumption", "startDate", "endDate", "status", "userId") VALUES ('8a771093-ff78-4756-bb76-add61fc15242', '450 kWh', '2024-06-10T15:21:30.752Z', '2023-11-29T16:03:05.745Z', 'Achieved', '9481d79b-e2c0-4562-bd7f-aa94273d83cf');
INSERT INTO "EnergySavingGoal" ("id", "targetConsumption", "startDate", "endDate", "status", "userId") VALUES ('c594a0e0-b499-4ba6-b874-8b5c28ee7536', '600 kWh', '2024-03-15T18:35:02.453Z', '2025-02-02T21:25:43.818Z', 'Pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EnergySavingGoal" ("id", "targetConsumption", "startDate", "endDate", "status", "userId") VALUES ('828f89d0-15e7-4a28-a85d-3a3f02ea978c', '500 kWh', '2024-11-28T06:49:36.638Z', '2025-07-11T22:44:44.370Z', 'Completed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EnergySavingGoal" ("id", "targetConsumption", "startDate", "endDate", "status", "userId") VALUES ('8bf3e40f-53bd-4c48-b4c9-974eb25168b7', '350 kWh', '2023-12-08T21:24:14.695Z', '2023-11-19T07:44:20.466Z', 'Achieved', '2c4c8576-bea1-47d7-bf3b-2046840a1614');
INSERT INTO "EnergySavingGoal" ("id", "targetConsumption", "startDate", "endDate", "status", "userId") VALUES ('6e819eec-f5b6-4623-9bd0-68e0e05ea44d', '450 kWh', '2024-11-09T19:18:55.701Z', '2025-07-12T05:27:27.753Z', 'Not Started', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EnergySavingGoal" ("id", "targetConsumption", "startDate", "endDate", "status", "userId") VALUES ('df78bd9a-2145-4117-a993-4f726dd82a9f', '700 kWh', '2025-06-22T04:25:42.453Z', '2024-03-26T11:10:03.040Z', 'Completed', 'f0fca178-163c-449e-9e9b-2d93e0053b3a');
INSERT INTO "EnergySavingGoal" ("id", "targetConsumption", "startDate", "endDate", "status", "userId") VALUES ('079e84e6-5af8-481d-94c7-71c5dc54b206', '350 kWh', '2025-06-08T22:35:24.059Z', '2025-09-08T21:07:01.702Z', 'Not Started', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EnergySavingGoal" ("id", "targetConsumption", "startDate", "endDate", "status", "userId") VALUES ('d27e75c1-3cd6-4d77-8587-aac90aabbf40', '600 kWh', '2025-10-19T04:10:34.233Z', '2024-05-14T08:09:45.524Z', 'Pending', '16828221-46c2-4d76-b084-5c8e1b2eeea1');
INSERT INTO "EnergySavingGoal" ("id", "targetConsumption", "startDate", "endDate", "status", "userId") VALUES ('b8951c0b-c666-42f2-96ec-7245af5c8e05', '500 kWh', '2024-06-17T12:30:14.493Z', '2025-04-06T20:40:29.189Z', 'Pending', 'bc7a7f11-b8c3-4d0c-b306-0a631296980f');

INSERT INTO "EvCharging" ("id", "vehicleModel", "chargingStart", "chargingEnd", "energyConsumed", "userId") VALUES ('f3623dda-9e6e-44d4-8ada-b15076687abb', 'Chevrolet Bolt', '2024-11-29T16:28:39.886Z', '2025-09-01T19:01:01.389Z', '15.2 kWh', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EvCharging" ("id", "vehicleModel", "chargingStart", "chargingEnd", "energyConsumed", "userId") VALUES ('abb4a6bf-3574-4930-8039-ebd310b75e97', 'Chevrolet Bolt', '2025-04-16T16:54:10.742Z', '2024-08-22T06:20:57.260Z', '20.1 kWh', 'c01df9e9-df95-4498-a6f9-5628092193f1');
INSERT INTO "EvCharging" ("id", "vehicleModel", "chargingStart", "chargingEnd", "energyConsumed", "userId") VALUES ('1fb1e8a0-d01c-4492-b026-e90c1ce18aee', 'Tesla Model 3', '2024-05-23T14:17:04.685Z', '2024-07-06T12:00:25.202Z', '15.2 kWh', '16f6bf07-46c1-4c75-a6fb-b08aef2257ab');
INSERT INTO "EvCharging" ("id", "vehicleModel", "chargingStart", "chargingEnd", "energyConsumed", "userId") VALUES ('4491762b-1f81-4157-9940-2984202f4758', 'Tesla Model 3', '2024-07-22T17:21:40.409Z', '2024-09-17T01:42:34.655Z', '20.1 kWh', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EvCharging" ("id", "vehicleModel", "chargingStart", "chargingEnd", "energyConsumed", "userId") VALUES ('2e958354-9cd2-4030-858f-53ef0e9fcec4', 'Tesla Model 3', '2025-04-08T12:07:03.567Z', '2024-08-11T13:01:22.990Z', '15.2 kWh', '16828221-46c2-4d76-b084-5c8e1b2eeea1');
INSERT INTO "EvCharging" ("id", "vehicleModel", "chargingStart", "chargingEnd", "energyConsumed", "userId") VALUES ('3ff99bbf-d36f-49ee-8b6a-8a2751f65434', 'Tesla Model 3', '2024-01-14T10:45:08.667Z', '2025-05-28T10:13:38.565Z', '16.8 kWh', '16828221-46c2-4d76-b084-5c8e1b2eeea1');
INSERT INTO "EvCharging" ("id", "vehicleModel", "chargingStart", "chargingEnd", "energyConsumed", "userId") VALUES ('725e4236-4145-4972-8de1-e561420ba34b', 'Chevrolet Bolt', '2024-02-27T03:58:03.711Z', '2023-12-08T20:10:47.157Z', '16.8 kWh', 'c01df9e9-df95-4498-a6f9-5628092193f1');
INSERT INTO "EvCharging" ("id", "vehicleModel", "chargingStart", "chargingEnd", "energyConsumed", "userId") VALUES ('9e96db62-eae1-400d-989c-06624062e027', 'Ford Mustang MachE', '2025-04-28T19:36:47.166Z', '2024-07-21T02:57:27.222Z', '20.1 kWh', '2c4c8576-bea1-47d7-bf3b-2046840a1614');
INSERT INTO "EvCharging" ("id", "vehicleModel", "chargingStart", "chargingEnd", "energyConsumed", "userId") VALUES ('7afc1458-27d1-4f12-9689-7261658c9cb8', 'Nissan Leaf', '2025-04-25T07:49:58.868Z', '2025-02-06T16:33:32.470Z', '16.8 kWh', 'e3ea383f-933b-4302-adec-e34422a4fde8');
INSERT INTO "EvCharging" ("id", "vehicleModel", "chargingStart", "chargingEnd", "energyConsumed", "userId") VALUES ('a553d8d2-4bd5-4bdf-b646-465d7234d473', 'Tesla Model 3', '2024-08-24T05:05:15.430Z', '2023-12-15T20:20:01.315Z', '16.8 kWh', 'e3ea383f-933b-4302-adec-e34422a4fde8');

INSERT INTO "EnergySavingRecommendation" ("id", "recommendationText", "potentialSavings", "userId") VALUES ('8fb9fb17-83b4-4418-ac80-34f77a621c8f', 'Utilize solar power during peak sunlight hours to minimize grid dependency.', 'Up to 15 reduction in monthly bills', 'f0fca178-163c-449e-9e9b-2d93e0053b3a');
INSERT INTO "EnergySavingRecommendation" ("id", "recommendationText", "potentialSavings", "userId") VALUES ('6b4fb511-5a2a-4dfa-b6c1-5c9325516a80', 'Run your dishwasher during offpeak hours to save energy.', 'Cut EV charging costs by 30', 'bc7a7f11-b8c3-4d0c-b306-0a631296980f');
INSERT INTO "EnergySavingRecommendation" ("id", "recommendationText", "potentialSavings", "userId") VALUES ('0161b913-e77f-43fd-934e-89a061e21d82', 'Utilize solar power during peak sunlight hours to minimize grid dependency.', 'Up to 15 reduction in monthly bills', '9481d79b-e2c0-4562-bd7f-aa94273d83cf');
INSERT INTO "EnergySavingRecommendation" ("id", "recommendationText", "potentialSavings", "userId") VALUES ('f56d4a6e-dd78-4e4b-876b-39fe550f6cc5', 'Utilize solar power during peak sunlight hours to minimize grid dependency.', 'Save 50 annually on heating costs', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EnergySavingRecommendation" ("id", "recommendationText", "potentialSavings", "userId") VALUES ('076d1aa7-e92d-4382-b912-cfcb25e30dfe', 'Install smart thermostats to optimize heating and cooling schedules.', 'Save 50 annually on heating costs', 'c01df9e9-df95-4498-a6f9-5628092193f1');
INSERT INTO "EnergySavingRecommendation" ("id", "recommendationText", "potentialSavings", "userId") VALUES ('a9e8628a-8391-44b6-b7e6-98180f3a2165', 'Utilize solar power during peak sunlight hours to minimize grid dependency.', 'Save 50 annually on heating costs', 'e3ea383f-933b-4302-adec-e34422a4fde8');
INSERT INTO "EnergySavingRecommendation" ("id", "recommendationText", "potentialSavings", "userId") VALUES ('ed770a5f-f3e4-4d9a-95e5-bb3520e35c7d', 'Use LED bulbs instead of incandescent ones to reduce electricity consumption.', 'Up to 15 reduction in monthly bills', 'f0fca178-163c-449e-9e9b-2d93e0053b3a');
INSERT INTO "EnergySavingRecommendation" ("id", "recommendationText", "potentialSavings", "userId") VALUES ('f2292914-2cfc-47b9-9473-c643a5389931', 'Charge your electric vehicle overnight when energy rates are lower.', 'Cut EV charging costs by 30', '16828221-46c2-4d76-b084-5c8e1b2eeea1');
INSERT INTO "EnergySavingRecommendation" ("id", "recommendationText", "potentialSavings", "userId") VALUES ('a9c8531e-3fde-4f21-92ef-3c43afa38c5f', 'Install smart thermostats to optimize heating and cooling schedules.', 'Up to 15 reduction in monthly bills', '2c4c8576-bea1-47d7-bf3b-2046840a1614');
INSERT INTO "EnergySavingRecommendation" ("id", "recommendationText", "potentialSavings", "userId") VALUES ('06aea05d-85cf-4563-81f1-9ac5ff387210', 'Utilize solar power during peak sunlight hours to minimize grid dependency.', 'Reduce lighting costs by 80', 'f0fca178-163c-449e-9e9b-2d93e0053b3a');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
