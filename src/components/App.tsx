import { ChangeEvent, FC, useState, useCallback, memo } from "react";
import styled from 'styled-components';
import { MemoList } from "./MemoList"
import { useMemoList } from "../hooks/useMemoList"

// FC function component
export const App:FC = memo(() => {
  console.log("app");
  const { memos, addTodo, deleteTodo } = useMemoList();
  const [text, setText] = useState<string>("");
  // 引数の型　ChangeEvent<HTMLInputElement>
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };

  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
  }, [deleteTodo]);

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
