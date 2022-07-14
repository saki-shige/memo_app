import { ChangeEvent, FC, useState } from "react";
import styled from 'styled-components';

export const App:FC = () => {
    const [text, setText] = useState<string>("");
    const [memos, setMemos] = useState<string[]>([]);
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    const onClickAdd = () => {
        const newMemos = [...memos];
        newMemos.push(text);
        memos.push(text);
        setMemos(newMemos);
        setText("");
    };

    const onClickDelete = (index: number) => {
        const newMemos = [...memos];
        newMemos.splice(index,1);
        setMemos(newMemos);
    };

    return(
        <div>
          <h1>簡単メモアプリ</h1>
          <input type="text" value={text} onChange={onChangeText}/ >
          <SButton onClick={onClickAdd}>追加</SButton>
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
        </div>
    );
};

const SButton = styled.button`
    margin-left: 16px;
`;
const SMemoWrapper = styled.div`
    display: flex;
    algin-items: center;
`;
