"use client"
import { useState } from 'react'

import DUMMY_QUESTIONS from '@/constants/question';
import EachUtils from '@/utils/EachUtils';
import { Button } from '@/components/ui/button';

const QuestionPage = () => {
    const [questionNumberIndex, setQuestionNumberIndex] = useState(0);
    const currentQuestion = DUMMY_QUESTIONS[questionNumberIndex];

    const handleSelectAnswer = (index: number) => {
        console.log(index);
        if (DUMMY_QUESTIONS.length - 1 === questionNumberIndex) return
        setQuestionNumberIndex(prev => prev + 1);
    }

    return (
        <div className='flex flex-col gap-6 items-center max-w-[50rem] mx-auto border border-stone-500 rounded-xl p-4 sm:p-8'>
            <div className='flex justify-start w-full'>
                <h2 className='text-xl md:text-2xl font-semibold'>Question {questionNumberIndex + 1}</h2>
            </div>
            <div className='flex flex-col gap-6 '>
                <div>
                    <h5 className='text-2xl md:text-3xl'>{currentQuestion.question}</h5>
                </div>
                <div className=''>
                    <ul className='flex flex-col items-center justify-center gap-4 w-full '>
                        <EachUtils of={currentQuestion.answers} render={(answer, index) => {
                            return <li className='w-full' key={index}>
                                <Button onClick={() => handleSelectAnswer(index)} className='w-full'>
                                    {answer}
                                </Button>
                            </li>
                        }} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default QuestionPage