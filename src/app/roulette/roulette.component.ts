import { Component } from '@angular/core';

interface Category {
  name: string;
  color: string;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
}

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent {
  spinning: boolean = false;
  showQuestion: boolean = false;
  categoryTitle: string = '';
  questionText: string = '';
  options: string[] = [];
  message: string = '';
  category: string = '';

  categories: Category[] = [
    { name: 'Tourism', color: 'red' },
    { name: 'Fashion Design', color: 'blue' }
  ];

  questions: Question[] = [
    {
      question: 'What is the name of the city known as San Pedro de Cayambe?',
      options: ['Quito', 'Cuenca', 'Cayambe', 'Riobamba'],
      correctAnswer: 'Cayambe',
      category: 'Tourism'
    },
    {
      question: 'What is the most important festival in Riobamba?',
      options: ['Fiesta del Niño Rey de Reyes', 'Carnival', 'Inti Raymi', 'La Mama Negra'],
      correctAnswer: 'Fiesta del Niño Rey de Reyes',
      category: 'Tourism'
    },
    {
      question: 'Which festival in Latacunga is recognized as Intangible Cultural Heritage of Ecuador?',
      options: ['Festival de la Mama Negra', 'Fiesta de la Virgen de las Mercedes', 'Festival del Inti Raymi', 'Feria taurina de San Isidro Labrador'],
      correctAnswer: 'Festival de la Mama Negra',
      category: 'Tourism'
    },
    {
      question: 'What is the full name of the city of Ambato?',
      options: ['Quito', 'Guayaquil', 'Ambato', 'Cuenca'],
      correctAnswer: 'Ambato',
      category: 'Tourism'
    },
    {
      question: 'What is a distinctive characteristic of Ambato?',
      options: ['It is surrounded by volcanoes like Tungurahua and Chimborazo', 'It has beautiful beaches', 'It is known for its Amazon rainforest', 'It has a tropical climate all year round'],
      correctAnswer: 'It is surrounded by volcanoes like Tungurahua and Chimborazo',
      category: 'Tourism'
    },
    {
      question: 'What is a distinctive characteristic of clothing in the Ecuadorian Sierra region?',
      options: ['Blouses with ruffles', 'Blue suits', 'Handmade accessories with Tagua seeds', 'Pressed wool hats'],
      correctAnswer: 'Blouses with ruffles',
      category: 'Fashion Design'
    },
    {
      question: 'What type of accessories are used in Amazonian clothing?',
      options: ['Pearl necklaces', 'Silver bracelets', 'Gold earrings', 'Accessories made from Tagua seeds'],
      correctAnswer: 'Accessories made from Tagua seeds',
      category: 'Fashion Design'
    },
    {
      question: 'What element distinguishes the clothing of the "montubios" in the Coastal region?',
      options: ['Blouses with ruffles', 'White hats', 'Long and wide skirts', 'Turban'],
      correctAnswer: 'White hats',
      category: 'Fashion Design'
    },
    {
      question: 'In which region is the clothing of the Sierra found?',
      options: ['Sierra', 'Coast', 'Amazon', 'Galapagos'],
      correctAnswer: 'Sierra',
      category: 'Fashion Design'
    },
    {
      question: 'Which Ecuadorian designer referenced indigenous aesthetics in their latest collection?',
      options: ['Lía Padilla', 'Juan Carlos Obando', 'Christian Acedo', 'María García'],
      correctAnswer: 'Lía Padilla',
      category: 'Fashion Design'
    }
  ];

  spinWheel() {
    this.spinning = true;
    this.showQuestion = false;

    // Simulate spinning delay
    setTimeout(() => {
      this.spinning = false;
      this.showQuestion = true;
      this.setQuestion();
    }, 2000);
  }

  setQuestion() {
    // Select a random question
    const randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];

    this.categoryTitle = randomQuestion.category;
    this.questionText = randomQuestion.question;
    this.options = randomQuestion.options;
    this.category = randomQuestion.category.toLowerCase().replace(' ', '-');
  }

  checkAnswer(selectedOption: string) {
    const correctAnswer = this.options[this.options.length - 1]; // Last option is always the correct one

    if (selectedOption === correctAnswer) {
      this.message = 'Congratulations! You answered correctly.';
    } else {
      this.message = 'Sorry, please try again later.';
    }
  }

  reset() {
    this.showQuestion = false;
    this.message = '';
  }
}
