import "./Card.css";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

// const Card = ({ title, detail, value }) => {
//   return (
//     <div className="card">
//       <h2>{title}</h2>
//       <p>{detail}</p>
//       {value < 10 ? <p>kısıtlı stok</p> : <p>Yeterli stok</p>}
//       {/* Conditional Rendering : koşullu yazdırma */}
//     </div>
//   );
// };

function Cards({ title, detail, key }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        {/* <Badge color="pink" variant="light">
          on sale
        </Badge> */}
      </Group>

      <Text size="sm" color="dimmed">
        {detail}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Rezervasyon
      </Button>
    </Card>
  );
}

export default Cards;
