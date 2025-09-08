# 🏖️ Sistema de Gestão de Colaboradores e Férias

Este projeto é uma aplicação **full-stack** para gerir colaboradores e seus pedidos de férias.  
O sistema garante que **não existam férias sobrepostas** e implementa regras de acesso baseadas em **roles** (Admin, Manager e Collaborator).

---

## 🚀 Objetivos do Exercício

- [ ] Gerir colaboradores.  
- [ ] Gerir pedidos de férias.  
- [ ] Garantir que não existam férias sobrepostas entre colaboradores (ou seja, dois ou mais colaboradores não podem estar de férias no mesmo dia).  
- [ ] Diferenciar roles de usuário:
  - [ ] **Admin**: pode criar usuários e gerenciar todas as férias.  
  - [ ] **Manager**: gerencia um conjunto de colaboradores; pode aprovar ou rejeitar férias apenas de seus colaboradores.  
  - [ ] **Collaborator**: pode criar e gerenciar apenas seus próprios pedidos de férias.  

> 🔐 Implementar login/autenticação é **opcional**.  
Se não implementado, os usuários podem ser **hardcoded** e selecionados de forma simples para simular o usuário logado (ex.: dropdown ou seleção no front-end).

---

## 📋 Requisitos Principais

### 👥 Colaboradores
- [ ] Criar, listar, obter detalhes, editar e remover colaboradores.  
- [x] Cada colaborador deve estar associado a um **manager**.  
- [-] Apenas **admins** podem criar e gerenciar usuários.  
- [ ] **Managers** não podem criar usuários, apenas gerenciar férias de seus colaboradores.  

### 📅 Pedidos de Férias
- [ ] Criar, listar, obter detalhes, editar e cancelar pedidos de férias.  
- [ ] Validar que não existam **férias sobrepostas** (mesmo período) entre colaboradores.  
- [ ] Considerar **datas inclusivas** (ex.: 01/08 a 05/08 inclui os 5 dias).  
- [ ] Cada pedido deve ter um **status**: `pendente`, `aprovado`, `rejeitado`.  
- [ ] Pedidos são aprovados/rejeitados pelo **manager responsável** ou pelo **admin**.  
- [ ] **Colaboradores** só podem ver e criar seus próprios pedidos.  
- [ ] **Managers** só podem aprovar/rejeitar pedidos de seus colaboradores.  
- [ ] **Admins** podem ver e gerenciar tudo.  

---

## ⭐ Bônus (opcional)

- [ ] Implementar login/autenticação.  
- [ ] Paginação e filtros para listagem de colaboradores e pedidos de férias.  
- [ ] Visualização em calendário dos períodos de férias.  

---

## 📌 Estrutura de Roles

| Role          | Permissões                                                                 |
|---------------|----------------------------------------------------------------------------|
| **Admin**     | Criar/editar/remover usuários e gerenciar todas as férias.                 |
| **Manager**   | Aprovar/rejeitar férias apenas de seus colaboradores.                      |
| **Colaborador** | Criar e gerenciar apenas seus próprios pedidos de férias.                 |

---

## 📦 Como rodar o projeto

