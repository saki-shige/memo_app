import { FC, memo } from "react"
import styled from "styled-components"

// type 型定義を変数化
type Props = {
    memos: string[];
    // void　関数が何も返却しない　return文を記述するとエラーすることができる
    onClickDelete: (index: number ) => void
};

// (props: Props)
export const MemoList: FC<Props> = memo((props) => {
  const { memos, onClickDelete } = props;

  return(
    <ul>
    {memos.map((memo,i) => (
       <li key={i}>
           <SMemoWrapper>
             <p>{memo}</p>
             <SButton onClick={() => onClickDelete(i)}>削除</SButton>
           </SMemoWrapper>
       </li>
    ))}
    </ul>
  );
});

const SButton = styled.button`
    margin-left: 16px;
`;
const SMemoWrapper = styled.div`
    display: flex;
    algin-items: center;
`;
