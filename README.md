# 🏖️ Sistema de Gestão de Colaboradores e Férias

Este projeto é uma aplicação **full-stack** para gerir colaboradores e seus pedidos de férias.  
O sistema garante que **não existam férias sobrepostas** e implementa regras de acesso baseadas em **roles** (Admin, Manager e Collaborator).

---

## 🚀 Objetivos do Exercício

- [x] Gerir colaboradores.  
- [x] Gerir pedidos de férias.  
- [ ] Garantir que não existam férias sobrepostas entre colaboradores (ou seja, dois ou mais colaboradores não podem estar de férias no mesmo dia).  
- [x] Diferenciar roles de usuário:
  - [OK] **Admin**: pode criar usuários-[ok] e gerenciar todas as férias.  
  - [OK] **Manager**: gerencia um conjunto de colaboradores-[ok]; pode aprovar ou rejeitar férias apenas de seus colaboradores.  
  - [OK] **Collaborator**: pode criar e gerenciar apenas seus próprios pedidos de férias.  

> 🔐 Implementar login/autenticação é **opcional**.  
Se não implementado, os usuários podem ser **hardcoded** e selecionados de forma simples para simular o usuário logado (ex.: dropdown ou seleção no front-end).

---

## 📋 Requisitos Principais

### 👥 Colaboradores
- [x] Criar-[OK], listar-[OK], obter detalhes-[OK], editar-[OK] e remover colaboradores-[OK].  
- [x] Cada colaborador deve estar associado a um **manager**.  
- [x] Apenas **admins** podem criar e gerenciar usuários.  
- [x] **Managers** não podem criar usuários, apenas gerenciar férias de seus colaboradores.  

### 📅 Pedidos de Férias
- [ ] Criar, listar, obter detalhes, editar e cancelar pedidos de férias.  
- [ ] Validar que não existam **férias sobrepostas** (mesmo período) entre colaboradores.  
- [ ] Considerar **datas inclusivas** (ex.: 01/08 a 05/08 inclui os 5 dias).  
- [x] Cada pedido deve ter um **status**: `pendente`, `aprovado`, `rejeitado`.  
- [x] Pedidos são aprovados/rejeitados pelo **manager responsável** ou pelo **admin**.  
- [ ] **Colaboradores** só podem ver e criar seus próprios pedidos.  
- [ ] **Managers** só podem aprovar/rejeitar pedidos de seus colaboradores.  
- [x] **Admins** podem ver e gerenciar tudo.  

---

## ⭐ Bônus (opcional)

- [x] Implementar login/autenticação.  
- [ ] Paginação e filtros para listagem de colaboradores e pedidos de férias.  
- [ ] Visualização em calendário dos períodos de férias.  

---

## 📌 Estrutura de Roles

| Role          | Permissões                                                                 |
|-----------------|----------------------------------------------------------------------------|
| **Admin**       | [OK] Criar/editar/remover usuários e gerenciar todas as férias.                 |
| **Manager**     | [OK] Aprovar/rejeitar férias apenas de seus colaboradores.                      |
| **Colaborador** | [  ] Criar e gerenciar apenas seus próprios pedidos de férias.                 |

---

## ROTAS MELHORIAS.

CRIAR:

LISTAR:
- [ ] - Adicionar paginação e ordenar por ordem:
      Casos:
      [ ] - User: ordenar por ordem das roles "ADMIN - MANAGER -COLLABORATOR"
            cada user dentro deles por ordem alfabertica.
      [ ] - Férias: ordenar por ordem das roles "ADMIN - MANAGER -COLLABORATOR"
            cada user dentro deles por ordem alfabertica.


LISTAR DETALHES:


EDITAR:


DELETAR
- [ ] - Para deletar um manager ele não pode ter colaboradores.
        [ ] - Antes de deletar é preciso criar a funcionalidade de passar todos
        os colaboradores dele para outro manager.

