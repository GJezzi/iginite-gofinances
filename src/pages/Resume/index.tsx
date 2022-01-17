import React from 'react';
import { HistoryCard } from '../../components/HistoryCard';
import { Container, Form, Header, Title } from './styles';

interface Props {
    title: string;
}

export const Resume = (props: Props) => {
	return <Container>
		<Header>
			<Title>Resumo por categoria</Title>
		</Header>
		<HistoryCard
			color='red'
			title="Compras"
			amount="R$10,00"
		/>
	</Container>;
};
