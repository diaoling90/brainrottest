import { redirect } from 'next/navigation';

export default function RootQuizPage() {
  // 重定向到英文版本
  redirect('/en/quiz');
}