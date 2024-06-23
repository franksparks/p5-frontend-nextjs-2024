import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Books
  const bookOne = await prisma.books.create({
    data: {
      title: "Tan poca vida",
      authorName: "Hanya ",
      authorLastName: "Yanagihara",
      pages: 1008,
      publisher: "Lumen",
      publishYear: 2015,
      cover: "/covers/tanPocaVida.jpeg",
      status: "READ",
    },
  });
  const bookTwo = await prisma.books.create({
    data: {
      title: "La casa de hojas",
      authorName: "Mark ",
      authorLastName: "Danielewski",
      pages: 736,
      publisher: "Pálido fuego",
      publishYear: 2013,
      cover: "/covers/laCasaDeHojas.jpeg",
      status: "PENDING",
    },
  });
  const bookThree = await prisma.books.create({
    data: {
      title: "Don Quijote de la Mancha",
      authorName: "Miguel",
      authorLastName: "De Cervantes",
      pages: 1560,
      publisher: "Austral",
      publishYear: 1605,
      review: "Test",
      cover: "/covers/donQuijoteDeLaMancha.jpeg",
      status: "PENDING",
    },
  });
  const bookFour = await prisma.books.create({
    data: {
      title: "El color de la magia",
      authorName: "Terry",
      authorLastName: "Pratchett",
      pages: 330,
      publisher: "De Bolsillo",
      publishYear: 1983,
      cover: "/covers/elColorDeLaMagia.jpeg",
      status: "READING",
    },
  });
  const bookFive = await prisma.books.create({
    data: {
      title: "Fundación",
      authorName: "Isaac",
      authorLastName: "Asimov",
      pages: 420,
      publisher: "De Bolsillo",
      publishYear: 1951,
      cover: "/covers/fundacion.jpeg",
      status: "READING",
    },
  });
  const bookSix = await prisma.books.create({
    data: {
      title: "La trilogía de Nueva York",
      authorName: "Paul",
      authorLastName: "Auster",
      pages: 280,
      publisher: "Anagrama",
      publishYear: 1987,
      cover: "/covers/laTrilogiaDeNuevaYork.jpeg",
      status: "READ",
    },
  });
  const bookSeven = await prisma.books.create({
    data: {
      title: "Ubik",
      authorName: "Philip",
      authorLastName: "K. Dick",
      pages: 310,
      publisher: "Minotauro",
      publishYear: 1969,
      cover: "/covers/ubik.jpeg",
      status: "READ",
    },
  });
  const bookEight = await prisma.books.create({
    data: {
      title: "Lavinia",
      authorName: "Ursula",
      authorLastName: "K. Le Guin",
      pages: 333,
      publisher: "Minotauro",
      publishYear: 2008,
      cover: "/covers/lavinia.jpeg",
      status: "READ",
    },
  });
  const bookNine = await prisma.books.create({
    data: {
      title: "El hobbit",
      authorName: "John Ronald Reuel",
      authorLastName: "Tolkien",
      pages: 288,
      publisher: "Booket",
      publishYear: 1937,
      cover: "/covers/hobbit.jpeg",
      status: "READ",
    },
  });
  const bookTen = await prisma.books.create({
    data: {
      title: "La Guerra de las salamandras",
      authorName: "Karel",
      authorLastName: "Capek",
      pages: 336,
      publisher: "Libros del Zorro Rojo",
      publishYear: 1936,
      cover: "/covers/laGuerraDeLasSalamandras.jpeg",
      status: "READ",
    },
  });
  const bookEleven = await prisma.books.create({
    data: {
      title: "Error Humano",
      authorName: "Chuck",
      authorLastName: "Palauniuk",
      pages: 180,
      publisher: "De Bolsillo",
      publishYear: 2005,
      cover: "/covers/errorHumano.jpeg",
      status: "READING",
    },
  });
  const bookTwelve = await prisma.books.create({
    data: {
      title: "Atlantis found",
      authorName: "Clive",
      authorLastName: "Cussler",
      pages: 530,
      publisher: "Berkley Books",
      publishYear: 2000,
      cover: "/covers/atlantisFound.jpeg",
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
