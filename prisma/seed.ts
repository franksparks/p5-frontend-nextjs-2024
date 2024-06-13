import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Books
  const bookOne = await prisma.book.create({
    data: {
      title: "Tan poca vida",
      authorName: "Hanya ",
      authorLastName: "Yanagihara",
      pages: 1008,
      publisher: "Lumen",
      publishYear: 2015,
      review: "",
      cover: "/tanPocaVida.jpeg",
      status: "READ",
    },
  });
  const bookTwo = await prisma.book.create({
    data: {
      title: "La casa de hojas",
      authorName: "Mark ",
      authorLastName: "Danielewski",
      pages: 736,
      publisher: "Pálido fuego",
      publishYear: 2013,
      review: "",
      cover: "/laCasaDeHojas.jpeg",
      status: "PENDING",
    },
  });
  const bookThree = await prisma.book.create({
    data: {
      title: "Don Quijote de la Mancha",
      authorName: "Miguel",
      authorLastName: "De Cervantes",
      pages: 1560,
      publisher: "Austral",
      publishYear: 1605,
      review: "Test",
      cover: "/donQuijoteDeLaMancha.jpeg",
      status: "PENDING",
    },
  });
  const bookFour = await prisma.book.create({
    data: {
      title: "El color de la magia",
      authorName: "Terry",
      authorLastName: "Pratchett",
      pages: 330,
      publisher: "De Bolsillo",
      publishYear: 1983,
      review: "",
      cover: "/elColorDeLaMagia.jpeg",
      status: "READING",
    },
  });
  const bookFive = await prisma.book.create({
    data: {
      title: "Fundación",
      authorName: "Isaac",
      authorLastName: "Asimov",
      pages: 420,
      publisher: "De Bolsillo",
      publishYear: 1951,
      review: "",
      cover: "/fundacion.jpeg",
      status: "READING",
    },
  });
  const bookSix = await prisma.book.create({
    data: {
      title: "La trilogía de Nueva York",
      authorName: "Paul",
      authorLastName: "Auster",
      pages: 280,
      publisher: "Anagrama",
      publishYear: 1987,
      review: "",
      cover: "/laTrilogiaDeNuevaYork.jpeg",
      status: "READ",
    },
  });
  const bookSeven = await prisma.book.create({
    data: {
      title: "Ubik",
      authorName: "Philip",
      authorLastName: "K. Dick",
      pages: 310,
      publisher: "Minotauro",
      publishYear: 1969,
      review: "",
      cover: "/ubik.jpeg",
      status: "READ",
    },
  });
  const bookEight = await prisma.book.create({
    data: {
      title: "Lavinia",
      authorName: "Ursula",
      authorLastName: "K. Le Guin",
      pages: 333,
      publisher: "Minotauro",
      publishYear: 2008,
      review: "",
      cover: "/lavinia.jpeg",
      status: "READ",
    },
  });
  const bookNine = await prisma.book.create({
    data: {
      title: "El hobbit",
      authorName: "John Ronald Reuel",
      authorLastName: "Tolkien",
      pages: 288,
      publisher: "Booket",
      publishYear: 1937,
      review: "",
      cover: "/hobbit.jpeg",
      status: "READ",
    },
  });
  const bookTen = await prisma.book.create({
    data: {
      title: "La Guerra de las salamandras",
      authorName: "Karel",
      authorLastName: "Capek",
      pages: 336,
      publisher: "Libros del Zorro Rojo",
      publishYear: 1936,
      review: "",
      cover: "/laGuerraDeLasSalamandras.jpeg",
      status: "READ",
    },
  });
  const bookEleven = await prisma.book.create({
    data: {
      title: "Error Humano",
      authorName: "Chuck",
      authorLastName: "Palauniuk",
      pages: 180,
      publisher: "De Bolsillo",
      publishYear: 2005,
      review: "",
      cover: "/errorHumano.jpeg",
      status: "READING",
    },
  });
  const bookTwelve = await prisma.book.create({
    data: {
      title: "Atlantis found",
      authorName: "Clive",
      authorLastName: "Cussler",
      pages: 530,
      publisher: "Berkley Books",
      publishYear: 2000,
      review: "",
      cover: "/atlantisFound.jpeg",
      status: "PENDING",
    },
  });

  console.log(
    "Books added:",
    bookOne,
    bookTwo,
    bookThree,
    bookFour,
    bookFive,
    bookSix,
    bookSeven,
    bookEight,
    bookNine,
    bookTen,
    bookEleven,
    bookTwelve
  );
}

main();
