export const sampleQuestion: Record<
   string,
   {
      img: string;
      correctAns: number;
      correct_img: string;
      choice: { key: number; label: string }[];
   }
> = {
   q1: {
      img: "q1",
      correctAns: 3,
      correct_img: "ans1",
      choice: [
         { key: 1, label: "Pikachu" },
         { key: 2, label: "Golteb" },
         { key: 3, label: "Ratbu" },
         { key: 4, label: "Kifey" },
      ],
   },
   q: {
      img: "q1",
      correctAns: 3,
      correct_img: "ans1",
      choice: [
         { key: 1, label: "Pikachu" },
         { key: 2, label: "Golteb" },
         { key: 3, label: "Ratbu" },
         { key: 4, label: "Kifey" },
      ],
   },
};
