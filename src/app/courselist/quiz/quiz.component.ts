import { Component } from '@angular/core';
import { quizDatabase } from './quizedata';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {


  constructor(private toastr:ToastrService){}

  quizData = quizDatabase;
   
  userAnswers: number[] = new Array(this.quizData.questions.length).fill(-1); 

  // Function to check the selected answer for a question
  checkAnswer(questionIndex: number, selectedOption: number): void {
    this.userAnswers[questionIndex] = selectedOption;
  }

  // Function to calculate and display quiz results
  showResults(): void {
    let score = 0;

    // Loop through questions and check user answers
    for (let i = 0; i < this.quizData.questions.length; i++) {
      if (this.userAnswers[i] === this.quizData.questions[i].correctOption) {
        score++;
      }
    }

    // Display the score to the user
    
    this.toastr.info(`You scored ${score} out of ${this.quizData.questions.length}`);


  }

}
