package edu.mum.cs472.model;

import java.util.Arrays;
import java.util.List;

public class Quiz {
	private int questionNumber;
	private List<String> questions;
	private List<String> answer;
	private int score;

	public Quiz()
	{
		questions= Arrays.asList("[0,1,1,2,3,?]","[2,4,6,8,10,?]","[1,2,4,8,16,?]","[1,4,9,16,25,?]");
		answer=Arrays.asList("5","12","32","36");
		this.questionNumber = 0;
		this.score=0;


	}
	public int getScore(){
		return score;
	}
	public void awardScore(){
		score++;
	}

	public boolean checkAnswer(String ans){

		return ans.equals(answer.get(questionNumber));
	}

	public String getQuestion(){
		return questions.get(questionNumber);
	}
	public List<String> getAnswer() {
		return answer;
	}

	public void setAnswer(List<String> answer) {
		this.answer = answer;
	}
	public int getQuestionNumber() {
		return questionNumber;
	}

	public void nextQuestion(){
		questionNumber++;
	}
	public boolean allQuestionsDone(){
		return questions.size()==questionNumber;

	}
	@Override
	public String toString(){
		return "questionNumber="+questionNumber+"\nquestion="+questions.get(questionNumber)+"\nanswer"+answer.get(questionNumber);
	}
}
