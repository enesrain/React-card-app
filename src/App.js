import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import { Input, Textarea, Button, Container, Stack, Grid } from "@mantine/core";

let products = [
  {
    id: 0,
    title: "Kart 1",
    detail: "Kart 1 detaylı bilgisi",
  },
  {
    id: 1,
    title: "Kart 2",
    detail: "Kart 2 detaylı bilgisi",
  },
  {
    id: 2,
    title: "Kart 3",
    detail: "Kart 3 detaylı bilgisi",
  },
];

const App = () => {
  const [inputTitle, setTitle] = useState("");
  const [inputDetail, setDetail] = useState("");
  const [list, setList] = useState(products);

  const ekle = () => {
    const copyList = [...list];
    let i = copyList.length;

    copyList.push({
      id: i,
      title: inputTitle,
      detail: inputDetail,
    });
    setList(copyList);
  };

  return (
    <Container size={1000}>
      <h1>Kart Oluşturma</h1>
      <div className="App">
        <Stack
          justify="space-around"
          h={300}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          })}
        >
          <Input
            placeholder="Kart başlığı giriniz:"
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Kart açıklaması giriniz"
            onChange={(e) => setDetail(e.target.value)}
          />
          <Button onClick={ekle}>Oluştur</Button>
        </Stack>

        <Grid justify="center" gutter="lg">
          {list.map((p) => (
            <Grid.Col span={3} key={p.id}>
              <Cards
                title={p.title}
                detail={p.detail}
                delete={() => {
                  let i = p.id;

                  const copyList = [...list];
                  copyList.splice(i, 1);

                  setList(copyList);
                  //standart olan kartları siliyor ama yeni eklediklerimizi silmiyor
                }}
              />
            </Grid.Col>
          ))}
        </Grid>

        {/* KEY : özelliği componentleri birbirinden ayırmak için vermemiz gereken ayırt edici bir değer. */}
      </div>
    </Container>
  );
};

export default App;
