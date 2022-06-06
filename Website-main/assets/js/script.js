let mobile = 'ontouchstart' in document.documentElement;

let switchAllowed = false;



function openSocial(type) {
  let url = 'about:blank';

  switch (type) {
    case 'discord':
      url = 'https://discord.gg/YQ37kYMZy7';
      break;
    case 'github':
      url = 'https://github.com/irislacutie';
      break;
    case 'ogu':
      url = 'https://ogu.gg/irisogu';
      break;
  }

  window.open(url);
}

function startIntroTyping() {
  new TypeIt('#intro-text', {
    speed: 30,
  })
    .type('welcome...', { delay: 1200 })
    .delete(null, { delay: 1000 })
    .type(`${mobile ? 'tap' : 'press any key'} to enter...`)
    .go();

  setTimeout(function () {
    switchAllowed = true;
  }, 2500);
}

function typerStartTyping(typer) {
  typer.reset();

  let text = ['certified skidder', 'nn anarchy player', 'i want a cat', '', 'why are you still here'];

  text.forEach(function (language, index) {
    typer.move(null);
    typer.type(language, { delay: 1000 });
    typer.pause(1000);

    typer.delete(language.length, { delay: 1000 });
  });

  typer.go();
}





function switchScreen() {
  document.title = '#transrights';

  $('.intro').fadeOut(1000, function () {
    $('.bg-image').fadeIn(1000);
    $('.main').fadeIn(1000, function () {
      startMainTyping();
    });
  });
}

document.addEventListener('keydown', function (e) {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', function (e) {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  startIntroTyping();
});
