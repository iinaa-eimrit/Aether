import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'football-analytics-ingestion',
  brokers: ['localhost:9092'] // Assuming local cluster from docker-compose
});

const consumer = kafka.consumer({ groupId: 'telemetry-group' });

export const startTelemetryConsumer = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: 'telemetry-stream', fromBeginning: false });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value?.toString(),
        });
        // In-memory aggregation logic would go here
      },
    });
    console.log('Kafka Consumer started for telemetry-stream');
  } catch (error) {
    console.error('Error starting Kafka consumer:', error);
  }
};
