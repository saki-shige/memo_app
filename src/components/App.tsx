import { ChangeEvent, FC, useState, useCallback, memo } from "react";
import styled from 'styled-components';
import { MemoList } from "./MemoList"

// FC function component
export const App:FC = memo(() => {
    console.log("app");
    const [text, setText] = useState<string>("");
    const [memos, setMemos] = useState<string[]>([]);
    // 引数の型　ChangeEvent<HTMLInputElement>
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    const onClickAdd = () => {
        console.log("clickadd")
        const newMemos = [...memos];
        newMemos.push(text);
        memos.push(text);
        setMemos(newMemos);
        setText("");
    };

    const onClickDelete = useCallback((index: number) => {
        console.log("clickdelete")
        const newMemos = [...memos];
        newMemos.splice(index,1);
        setMemos(newMemos);
    }, [memos]);

    return(
        <div>
          <h1>簡単メモアプリ</h1>
          <input type="text" value={text} onChange={onChangeText}/ >
          <SButton onClick={onClickAdd}>追加</SButton>
          <MemoList memos={memos} onClickDelete={onClickDelete} />
        </div>
    );
});

const SButton = styled.button`
    margin-left: 16px;
`;
