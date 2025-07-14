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
      img: "q_tree",
      correctAns: 2,
      correct_img: "ans_corn_tree",
      choice: [
         { key: 1, label: "Tree" },
         { key: 2, label: "Corn" },
         { key: 3, label: "Syringe" },
         { key: 4, label: "Butterfly" },
      ],
   },
   q2: {
      img: "q_foot_print",
      correctAns: 1,
      correct_img: "ans_dna_foot_print",
      choice: [
         { key: 1, label: "DNA" },
         { key: 2, label: "Globe" },
         { key: 3, label: "Foot Print" },
         { key: 4, label: "Test Tube" },
      ],
   },
   q3: {
      img: "q_microscope",
      correctAns: 3,
      correct_img: "ans_microscope",
      choice: [
         { key: 1, label: "Coral Reef" },
         { key: 2, label: "Leaf" },
         { key: 3, label: "Microscope" },
         { key: 4, label: "Shield" },
      ],
   },
   q4: {
      img: "q_corn",
      correctAns: 4,
      correct_img: "ans_dna_corn",
      choice: [
         { key: 1, label: "Syringe" },
         { key: 2, label: "Tree" },
         { key: 3, label: "Corn" },
         { key: 4, label: "DNA" },
      ],
   },
   q5: {
      img: "q_test_tube",
      correctAns: 3,
      correct_img: "ans_globe_test_tube",
      choice: [
         { key: 1, label: "Foot Print" },
         { key: 2, label: "Test Tube" },
         { key: 3, label: "Globe" },
         { key: 4, label: "Coral Reef" },
      ],
   },
   q6: {
      img: "q_syringe",
      correctAns: 3,
      correct_img: "ans_syringe",
      choice: [
         { key: 1, label: "Globe" },
         { key: 2, label: "Leaf" },
         { key: 3, label: "Syringe" },
         { key: 4, label: "Corn" },
      ],
   },
   q7: {
      img: "q_shield",
      correctAns: 2,
      correct_img: "ans_shield",
      choice: [
         { key: 1, label: "Leaf" },
         { key: 2, label: "Shield" },
         { key: 3, label: "Test Tube" },
         { key: 4, label: "Butterfly" },
      ],
   },
   q8: {
      img: "q_leaf",
      correctAns: 4,
      correct_img: "ans_coral_reef_leaf",
      choice: [
         { key: 1, label: "Microscope" },
         { key: 2, label: "DNA" },
         { key: 3, label: "Leaf" },
         { key: 4, label: "Coral Reef" },
      ],
   },
   q9: {
      img: "q_butterfly",
      correctAns: 3,
      correct_img: "ans_globe_butterfly",
      choice: [
         { key: 1, label: "Leaf" },
         { key: 2, label: "DNA" },
         { key: 3, label: "Globe" },
         { key: 4, label: "Butterfly" },
      ],
   },
   q10: {
      img: "q_globe",
      correctAns: 1,
      correct_img: "ans_leaf_globe",
      choice: [
         { key: 1, label: "Leaf" },
         { key: 2, label: "Globe" },
         { key: 3, label: "Test Tube" },
         { key: 4, label: "Shield" },
      ],
   },
   q11: {
      img: "q_dna",
      correctAns: 1,
      correct_img: "ans_dna",
      choice: [
         { key: 1, label: "DNA" },
         { key: 2, label: "Syringe" },
         { key: 3, label: "Corn" },
         { key: 4, label: "Foot Print" },
      ],
   },
   q12: {
      img: "q_coral_reef",
      correctAns: 4,
      correct_img: "ans_coral_reef",
      choice: [
         { key: 1, label: "Butterfly" },
         { key: 2, label: "Microscope" },
         { key: 3, label: "Corn" },
         { key: 4, label: "Coral Reef" },
      ],
   },
};
