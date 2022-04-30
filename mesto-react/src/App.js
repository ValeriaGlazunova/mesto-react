import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page">
      <header class="header">
        <img
          class="header__logo"
          alt="лого"
          src="<%=require('./images/header__logo.svg')%>"
        />
      </header>

      <main class="content">
        <section class="profile">
          <div class="profile__account">
            <div class="profile__avatar-container">
            <img
              class="profile__avatar"
              alt="аватар"
              src="<%=require('./images/profile__photo.jpg')%>"
            />
            <button type="button" class="profile__avatar-edit-btn"></button>
          </div>
            <div class="profile__info">
              <div class="profile__name-box">
                <h1 class="profile__name">Жак-Ив Кусто</h1>
                <button
                  aria-label="изменить профиль"
                  class="profile__edit-button"
                  type="button"
                ></button>
              </div>
              <p class="profile__description">Исследователь океана</p>
            </div>
          </div>
          <button
            aria-label="добавить фото"
            class="profile__add-button"
            type="button"
          ></button>
        </section>
        <section class="elements"></section>
      </main>

      <footer class="footer">
        <p class="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>

      <div class="popup popup_type_edit-profile">
        <div class="popup__container popup__container_type_edit-profile">
          <button
            class="popup__close-button popup__close-button_type_edit-profile"
            type="button"
          ></button>
          <h3 class="popup__heading">Редактировать профиль</h3>
          <form
            class="popup__form popup__form_type_edit-profile"
            name="profile-info"
            novalidate
          >
            <div class="popup__input-container">
              <input
                name="name"
                id="name-input"
                class="popup__input popup__input_type_name"
                type="text"
                placeholder="Имя"
                minlength="2"
                maxlength="40"
                required
              />
              <span
                id="name-input-error"
                class="popup__input-error popup__input-error_visible"
              ></span>
            </div>
            <div class="popup__input-container">
              <input
                name="job"
                id="job-input"
                class="popup__input popup__input_type_description"
                type="text"
                placeholder="Деятельность"
                minlength="2"
                maxlength="200"
                required
              />
              <span
                id="job-input-error"
                class="popup__input-error popup__input-error_visible"
              ></span>
            </div>
            <button class="popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_add-card">
        <div class="popup__container popup__container_type_add-card">
          <button
            class="popup__close-button popup__close-button_type_add-card"
            type="button"
          ></button>
          <h3 class="popup__heading">Новое место</h3>
          <form
            class="popup__form popup__form_type_add-card"
            name="add-card"
            novalidate
          >
            <div class="popup__input-container">
              <input
                name="card-name-input"
                id="card-name-input"
                class="popup__input popup__input_type_card-name"
                type="text"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
              />
              <span
                id="card-name-input-error"
                class="popup__input-error popup__input-error_visible"
              ></span>
            </div>
            <div class="popup__input-container">
              <input
                name="card-url-input"
                id="card-url-input"
                class="popup__input popup__input_type_card-link"
                type="url"
                placeholder="Ссылка на картинку"
                required
              />
              <span
                id="card-url-input-error"
                class="popup__input-error popup__input-error_visible"
              ></span>
            </div>
            <button
              class="popup__save-button popup__save-button_type_add-card"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_change-avatar">
        <div class="popup__container">
          <button
            class="popup__close-button"
            type="button"
          ></button>
          <h3 class="popup__heading">Обновить аватар</h3>
          <form
            class="popup__form popup__form_type_change-avatar"
            name="change-avatar"
            novalidate
          >
            <div class="popup__input-container">
              <input
                name="avatar-url-input"
                id="avatar-url-input"
                class="popup__input popup__input_type_avatar-url"
                type="url"
                placeholder="Ссылка на картинку"
                required
              />
              <span
                id="avatar-url-input-error"
                class="popup__input-error popup__input-error_visible"
              ></span>
            </div>
            <button
              class="popup__save-button popup__save-button_type_change-avatar"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    

    <div class="popup popup_type_img-open">
      <div class="popup__box">
        <button
          class="popup__close-button popup__close-button_type_img-open"
          type="button"
        ></button>
        <img class="popup__image" alt="картинка" src="#" />
        <h3 class="popup__subtitle"></h3>
      </div>
    </div>

    <div class="popup popup_type_confirm">
      <div class="popup__container">
        <button
          class="popup__close-button"
          type="button"
        ></button>
        <h3 class="popup__heading">Вы уверены?</h3>
        <form
          class="popup__form"
          name="confirm"
          novalidate
        >
          <button
            class="popup__save-button"
            type="submit"
          >
            Да
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default App;
