import React, { useState } from "react";
import { Modal } from "react-native";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelection } from "../../components/Form/CategorySelection";

import { CategorySelect } from "../CategorySelect";

import {
  Container,
  Header,
  Form,
  Title,
  Fields,
  TransactionTypeView,
} from "./styles";

export const Register = () => {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const handleTransactionType = (type: "up" | "down") => {
    setTransactionType(type);
  };

  const handleOpenSelectCategoryModal = () => {
    setCategoryModalOpen(true);
  }

  const handleCloseSelectCategoryModal = () => {
    setCategoryModalOpen(false);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypeView>
            <TransactionTypeButton
              isActive={transactionType === "up"}
              type="up"
              title="Income"
              onPress={() => handleTransactionType("up")}
            />
            <TransactionTypeButton
              isActive={transactionType === "down"}
              type="down"
              title="Outcome"
              onPress={() => handleTransactionType("down")}
            />
          </TransactionTypeView>
          <CategorySelection onPress={handleOpenSelectCategoryModal} title="Categoria" />
        </Fields>
        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
};
