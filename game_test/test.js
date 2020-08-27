var params = (new URL(document.location)).searchParams; 
//    console.log(params.get("level"));
    number = params.get("level") - 1;

if (number == 0) {
        $('link[href="style_level_1.css"]').attr('href', 'style_level_1.css');
         
        $("#favicon").attr("href","fav_1/favicon-32x32.png");
    }
                                        
    if (number == 1) {
        $('link[href="style_level_1.css"]').attr('href', 'style_level_2.css');
        $("#favicon").attr("href","fav_2/favicon-32x32.png");
    }
                                        
    if (number == 2) {
        $('link[href="style_level_1.css"]').attr('href', 'style_level_3.css');
        $("#favicon").attr("href","fav_3/favicon-32x32.png");
    }
    
    if (number == 3) {
        $('link[href="style_level_1.css"]').attr('href', 'style_level_4.css');
        $("#favicon").attr("href","fav_4/favicon-32x32.png");
    }
                                        
    if (number == 4) {
        $('link[href="style_level_1.css"]').attr('href', 'style_level_5.css');
        $("#favicon").attr("href","fav_5/favicon-32x32.png");
    }

$(function() {
   
    var k = 0;
    var num = 0;
    var answerWord = "";
    var solvedWords = 0;
    var index = 0;
    var number = -1;
    var numb = -1;

    
    
    var levels = [
        {words: [{word: "ГНОМ", solved: false, hint: "Человекоподобный карлик из древней мифологии",  hintAchieved: false, hintQuestion: "Вопрос: Сколько позвонков в шейном отделе позвоночника жирафа?", hintAnswer: "7"}, {word: "ГРОМ", solved: false, hint: "Звук сопровождающий молнию",  hintAchieved: false, hintQuestion: "Вопрос: Чем заканчиваются день и ночь?", hintAnswer: "ь"}, {word: "МИР", solved: false, hint: "Все, что существует на Земле и в космосе",  hintAchieved: false, hintQuestion: "Вопрос: Сколько спутников у земли? дайте ответ цифрой", hintAnswer: "1"}, {word: "ГОРН", solved: false, hint: "Духовой музыкальный инструмент",  hintAchieved: false, hintQuestion: "Вопрос: Какой город является столицей Мадагаскара?", hintAnswer: "антананариву"}, {word: "МИНОР", solved: false, hint: "Музыкальный лад",  hintAchieved: false, hintQuestion: "Вопрос: Что обозначает О3 в химии?", hintAnswer: "озон"}, {word: "ГРИМ", solved: false, hint: "Искусство изменения внешности человека",  hintAchieved: false, hintQuestion: "Вопрос: Единица измерения силы тока?", hintAnswer: "ампер"}, {word: "УГОН", solved: false, hint: "Неправомерное завладение автомобилем",  hintAchieved: false, hintQuestion: "Вопрос: Как называется зеленый пигмент, окрашивающий листья растений", hintAnswer: "хлорофилл"}, {word: "РОГ", solved: false, hint: "Образование из костного вещества на голове животного",  hintAchieved: false, hintQuestion: "Вопрос: Сколько хромосом в геноме человека?", hintAnswer: "46"}], initialWord: 'РОУМИНГ'},
        
        {words:[{word: "ЗОНА", solved: false, hint: "Определенное пространство",  hintAchieved: false, hintQuestion: "Вопрос: Какая самая близкая звезда к Земле?", hintAnswer: "солнце"}, {word: "НАВОЗ", solved: false, hint: "Органическое удобрение",  hintAchieved: false, hintQuestion: "Вопрос: В каком океане расположена глубочайшая впадина Земли?", hintAnswer: "в тихом"}, {word: "ВИНА", solved: false, hint: "Проступок, преступление",  hintAchieved: false, hintQuestion: "Вопрос: Сколько камер имеет человеческое сердце?", hintAnswer: "4"}, {word: "ОВЦА", solved: false, hint: "Жвачное млекопитающее с вьющейся шерстью",  hintAchieved: false, hintQuestion: "Вопрос: Чему равно отношение пути к времени?", hintAnswer: "скорости"}, {word: "ВАЗОН", solved: false, hint: "Цветочный горшок",  hintAchieved: false, hintQuestion: "Вопрос: Какой по счету от Солнца является Земля?", hintAnswer: "3"}, {word: "ЗВОН", solved: false, hint: "Звук, производимый ударом чего-то металлического",  hintAchieved: false, hintQuestion: "Вопрос: Как называется прямая, ограниченная точками?", hintAnswer: "отрезок"}, {word: "ЗОВ", solved: false, hint: "Призыв, клич",  hintAchieved: false, hintQuestion: "Вопрос: Самая длинная река в мире?", hintAnswer: "нил"}, {word: "ВИЗА", solved: false, hint: "Отметка в иностранном паспорте, разрешающая въезд в страну",  hintAchieved: false, hintQuestion: "Вопрос: Сколько звезд на флаге США?", hintAnswer: "50"}], initialWord: 'ВОЗНИЦА'},
        
        {words:[{word: "ДУБ", solved: false, hint: "Большое лиственное дерево",  hintAchieved: false, hintQuestion: "Назовите фамилию автора романа 'Судьба человека'", hintAnswer: "шолохов"}, {word: "БУДКА", solved: false, hint: "Небольшое здание, строение служебного назначения",  hintAchieved: false, hintQuestion: "Вопрос: Как называется победа в шахматной партии?", hintAnswer: "мат"}, {word: "БОК", solved: false, hint: "Правая или левая сторона тела или предмета",  hintAchieved: false, hintQuestion: "Вопрос: Как называется наука о растениях?", hintAnswer: "ботаника"}, {word: "УПАДОК", solved: false, hint: "Состояние ослабления деятельности",  hintAchieved: false, hintQuestion: "Вопрос: Что выкрал Прометей у богов?", hintAnswer: "огонь"}, {word: "КОД", solved: false, hint: "Список условных обозначений",  hintAchieved: false, hintQuestion: "Вопрос: Как в старину называли глаз?", hintAnswer: "око"}, {word: "ПАУК", solved: false, hint: "Торжественная песня, посвященная кому или чему-либо",  hintAchieved: false, hintQuestion: "Вопрос: Сколько в русском языке частей речи?", hintAnswer: "10"}, {word: "ОДА", solved: false, hint: "Хищное членистоногое, плетущее паутину",  hintAchieved: false, hintQuestion: "Вопрос: Сколько планет в нашей Солнечной системе?", hintAnswer: "8"}, {word: "УПАД", solved: false, hint: "Заниматься чем-либо до полной потери сил, до изнеможения",  hintAchieved: false, hintQuestion: "Вопрос: Единица изменеия энергии - это...", hintAnswer: "джоуль"}], initialWord: 'ПОБУДКА'},
        
        {words: [{word: "ГНОМ", solved: false, hint: "Человекоподобный карлик из древней мифологии",  hintAchieved: false, hintQuestion: "Вопрос: Сколько позвонков в шейном отделе позвоночника жирафа?", hintAnswer: "7"}, {word: "ГРОМ", solved: false, hint: "Звук сопровождающий молнию",  hintAchieved: false, hintQuestion: "Вопрос: Чем заканчиваются день и ночь?", hintAnswer: "ь"}, {word: "МИР", solved: false, hint: "Все, что существует на Земле и в космосе",  hintAchieved: false, hintQuestion: "Вопрос: Сколько спутников у земли? дайте ответ цифрой", hintAnswer: "1"}, {word: "ГОРН", solved: false, hint: "Духовой музыкальный инструмент",  hintAchieved: false, hintQuestion: "Вопрос: Какой город является столицей Мадагаскара?", hintAnswer: "антананариву"}, {word: "МИНОР", solved: false, hint: "Музыкальный лад",  hintAchieved: false, hintQuestion: "Вопрос: Что обозначает О3 в химии?", hintAnswer: "озон"}, {word: "ГРИМ", solved: false, hint: "Искусство изменения внешности человека",  hintAchieved: false, hintQuestion: "Вопрос: Единица измерения силы тока?", hintAnswer: "ампер"}, {word: "УГОН", solved: false, hint: "Неправомерное завладение автомобилем",  hintAchieved: false, hintQuestion: "Вопрос: Как называется зеленый пигмент, окрашивающий листья растений", hintAnswer: "хлорофилл"}, {word: "РОГ", solved: false, hint: "Образование из костного вещества на голове животного",  hintAchieved: false, hintQuestion: "Вопрос: Сколько хромосом в геноме человека?", hintAnswer: "46"}], initialWord: 'РОУМИНГ'},
        
        {words: [{word: "ГНОМ", solved: false, hint: "Человекоподобный карлик из древней мифологии",  hintAchieved: false, hintQuestion: "Вопрос: Сколько позвонков в шейном отделе позвоночника жирафа?", hintAnswer: "7"}, {word: "ГРОМ", solved: false, hint: "Звук сопровождающий молнию",  hintAchieved: false, hintQuestion: "Вопрос: Чем заканчиваются день и ночь?", hintAnswer: "ь"}, {word: "МИР", solved: false, hint: "Все, что существует на Земле и в космосе",  hintAchieved: false, hintQuestion: "Вопрос: Сколько спутников у земли? дайте ответ цифрой", hintAnswer: "1"}, {word: "ГОРН", solved: false, hint: "Духовой музыкальный инструмент",  hintAchieved: false, hintQuestion: "Вопрос: Какой город является столицей Мадагаскара?", hintAnswer: "антананариву"}, {word: "МИНОР", solved: false, hint: "Музыкальный лад",  hintAchieved: false, hintQuestion: "Вопрос: Что обозначает О3 в химии?", hintAnswer: "озон"}, {word: "ГРИМ", solved: false, hint: "Искусство изменения внешности человека",  hintAchieved: false, hintQuestion: "Вопрос: Единица измерения силы тока?", hintAnswer: "ампер"}, {word: "УГОН", solved: false, hint: "Неправомерное завладение автомобилем",  hintAchieved: false, hintQuestion: "Вопрос: Как называется зеленый пигмент, окрашивающий листья растений", hintAnswer: "хлорофилл"}, {word: "РОГ", solved: false, hint: "Образование из костного вещества на голове животного",  hintAchieved: false, hintQuestion: "Вопрос: Сколько хромосом в геноме человека?", hintAnswer: "46"}], initialWord: 'РОУМИНГ'}
    ];
    
    
    var params = (new URL(document.location)).searchParams; 
//    console.log(params.get("level"));
    number = params.get("level") - 1;
    
    $(".level__title").append(params.get("level"));
    $(".level__title").addClass("bold");
    

//    if (number == 0) {
//        $('link[href="style_level_1.css"]').attr('href', 'style_level_1.css');
//         
//        $("#favicon").attr("href","fav_1/favicon-32x32.png");
//    }
//                                        
//    if (number == 1) {
//        $('link[href="style_level_1.css"]').attr('href', 'style_level_2.css');
//        $("#favicon").attr("href","fav_2/favicon-32x32.png");
//    }
//                                        
//    if (number == 2) {
//        $('link[href="style_level_1.css"]').attr('href', 'style_level_3.css');
//        $("#favicon").attr("href","fav_3/favicon-32x32.png");
//    }
//    
//    if (number == 3) {
//        $('link[href="style_level_1.css"]').attr('href', 'style_level_4.css');
//        $("#favicon").attr("href","fav_4/favicon-32x32.png");
//    }
//                                        
//    if (number == 4) {
//        $('link[href="style_level_1.css"]').attr('href', 'style_level_5.css');
//        $("#favicon").attr("href","fav_5/favicon-32x32.png");
//    }
    
    $('.prev--' + number).addClass("active");
//    console.log(number);
    
//    Выводим слова, которые нужно угадать
    for (s = 0; s < levels[number].words.length; s++) {
        for (b = 0; b < levels[number].words[s].word.length; b++) {
            $('#w' + s).append('_ ');
        }
    }
    
//    Выводим слово, из которого нужно придумать другие слова
    for (j = 0; j < levels[number].initialWord.length; j++) {
        $('#l' + j).append(levels[number].initialWord[j]);
    }
    

//    нажатие на букву изначального слова
    $(".letter").on("click", function(event) {

//      Добавляем букву в окно для ввода
        $('.window').append(event.target.firstChild.data);

        k = k + 1;
        if (answerWord.length > 13) {
            
//          Введено слишком длинное слово, поэтому открываем модальное окно с предупреждением
            $('#long').addClass("indicate");
            
//            Нажатие на кнопку закрытия окна
            $("[data-close]").on("click", function(event) {
                    $(".modal").removeClass("indicate")
            });
            
//            очищаем окно ввода
            $('.window').empty(event.target.firstChild.data);
            
//            очищаем слово-ответ
            answerWord = ""
        }
       
//        Составление слова, которое вводится пользователем
        answerWord = answerWord + event.target.firstChild.data;
    });


//    нажатие на кнопку "ок"
    $("#ok").on("click", function(event) {
        
        var flag = false
        
        for (i = 0; i < levels[number].words.length; i++) {

//            проверка слова на совпадение с загаданными
            if (answerWord == levels[number].words[i].word) {
                levels[number].words[i].solved = true;
                flag = true;
                num = i;
                break;
            } 
        }
        console.log(params.get("level"));

//        если слово совпадает
        if (flag == true) {

            if (levels[number].words[i].solved == true) {
                solvedWords++;
            }
            
//            очищаем слово, состоящее из "_"
            $('#w' + i).empty();
//            выводим угаданное слово на экран
            $('#w' + i).append(levels[number].words[i].word);
            
            answerWord = ""
            $('.window').empty(event.target.firstChild.data);

//            если все слова угаданы, то
            if (solvedWords == levels[number].words.length) {
                
//                модальное окно об окончании уровня
                $('#end').addClass("indicate");
                $("[data-close]").on("click", function(event) {
                    $(".modal").removeClass("indicate")
                });
                
                lv = parseFloat(params.get("level")) + 1;
                console.log(params.get("level"));
//                показываем кнопку перехода на следующий уровень
                $('.next--' + lv).addClass("active");
            }

//        если слово не совпадает с загаданным
        } else {
//            показываем м/о с сожалением
            $('#wrong').addClass("indicate");
            $("[data-close]").on("click", function(event) {
                $(".modal").removeClass("indicate")
            });
            
            answerWord = ""
            $('.window').empty(event.target.firstChild.data);
        }

        for (i=0; i < levels[number].words.length; i++) {
            if (levels[number].words[i].solved == false) {
                index = i;
            }
        };
        
    });


//    нажатие на кнопку "сброс"
    $("#sbros").on("click", function(event) {
        $('.window').empty(event.target.firstChild.data);
        answerWord = ""
    });


//    нажатие на кнопку с подсказкой
    $("#ask").on("click", function(event) {
        
        
        $(".modal__content").removeClass("hidden");
        
//        показываем м/о
        $('#question').addClass("indicate");
//        показываем вопрос, необходимый для получения подсказки
        $('.modal__text').append(levels[number].words[index].hintQuestion);
        $("[data-close]").on("click", function(event) {
            $(".modal").removeClass("indicate")
            $(".mytext").val('');
            $('.modal__text').empty(levels[number].words[index].hintQuestion);

        });

//        нажатие на кнопку при ответе на вопрос
        $("#answer").on("click", function(event) {

//            если то, что было введено совпадает с ответом
            if ($(".mytext").val().toLocaleLowerCase() == levels[number].words[index].hintAnswer) {
                
                $(".modal__hidden").addClass("open");
                $(".modal__content").addClass("hidden");
//                показываем кнопку подсазки у слова
                $('#h' + index).addClass("show");

                levels[number].words[index].hintAchieved = true;

                $("[data-close]").on("click", function(event) {
                    $(".modal").removeClass("indicate");
                    $(".mytext").val('');
                    $(".modal__content").removeClass("hidden");
                    $(".modal__hidden").removeClass("open");
                    $(".modal__wrong").removeClass("open");
                });
                
                $('.modal__hint').empty(levels[number].words[index].hint);
                if (levels[number].words[index].hintAchieved == true) {
                    $("#h" + index).on("click", function(event) {
                        $('.modal__hint').empty(levels[number].words[index].hint);
                        $('.modal__hint').append(levels[number].words[index].hint);
                        $("#modal").addClass("indicate");
                        $("[data-close]").on("click", function(event) {
                            $(".modal").removeClass("indicate")
                            $('.modal__hint').empty(levels[number].words[index].hint);
                        });
                    });
            }

//            если то, что было введено не совпадает с ответом
            } else {
                $(".mytext").val('');
                $(".modal__content").addClass("hidden");
                $('.modal__hint').empty(levels[number].words[index].hint);
                $('.modal__wrong').addClass("open");
                
                $("[data-close]").on("click", function(event) {
                    $(".modal__wrong").removeClass("open");
                });
            };

        })

    });


});