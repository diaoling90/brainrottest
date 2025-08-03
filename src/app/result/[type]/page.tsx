import { redirect } from 'next/navigation';

type Props = {
  params: { type: string };
};

export default function RootResultPage({ params: { type } }: Props) {
  // 重定向到英文版本
  redirect(`/en/result/${type}`);
}