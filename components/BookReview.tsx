"use client";
import { actionUpdateReview } from "@/app/actions/books";
import { Book } from "@/lib/books";
import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

type bookCardProps = {
  book: Book;
};

export default function BookReview({ book }: bookCardProps) {
  const [review, setReview] = useState(book.review || "");
  const [editionMode, setEditionMode] = useState(false);

  const handleTextareaChange = (event: any) => {
    setReview(event.target.value);
  };

  const handleSaveReview = () => {
    actionUpdateReview(book.bookId, review);
    setEditionMode(false);
  };

  const handleEditReview = () => {
    setEditionMode(!editionMode);
  };
  return (
    <main>
      <div className="">
        {book.status === "PENDING" && (
          <div>
            <p>Lee el libro para poder valorarlo.</p>
          </div>
        )}
        {book.status === "READING" && (
          <div>
            <p>Termina el libro para poder valorarlo.</p>
          </div>
        )}
        {book.status === "READ" && book.review === "" && (
          <div className="w-48 ">
            <div>Añade tu valoración!</div>
            <Textarea
              value={review}
              onChange={handleTextareaChange}
            ></Textarea>
            <Button className="m-2" onClick={handleSaveReview}>
              Guardar valoración
            </Button>
          </div>
        )}
        {book.status === "READ" && book.review !== "" && !editionMode && (
          <div className="">
            <h3 className="underline">Mi valoración</h3>

            <p className="italic mb-4">{book.review}</p>
            <Button onClick={handleEditReview}>Editar</Button>
            <div>
              <p>{editionMode}</p>
            </div>
          </div>
        )}
        {book.status === "READ" && book.review !== "" && editionMode && (
          <div className="">
            <h3 className="underline">Edita tu valoración</h3>

            <Textarea
              value={review}
              onChange={handleTextareaChange}
            ></Textarea>
            <Button className="m-2" onClick={handleSaveReview}>
              Guardar valoración
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
