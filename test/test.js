$(function() {
   
    var k = 0;
    var num = 0;
    var answerWord = "";
    var solvedWords = 0
    var index = 0;

    var level = {words:[
                {word: "ГНОМ", solved: false, hint: "Человекоподобный карлик из древней мифологии",  hintAchieved: false, hintQuestion: "Вопрос: Сколько позвонков в шейном отделе позвоночника жирафа?", hintAnswer: "7"}, 
                {word: "ГРОМ", solved: false, hint: "Звук сопровождающий молнию",  hintAchieved: false, hintQuestion: "Вопрос: Чем заканчиваются день и ночь?", hintAnswer: "ь"}, 
                {word: "МИР", solved: false, hint: "Все, что существует на Земле и в космосе",  hintAchieved: false, hintQuestion: "Вопрос: Сколько спутников у земли? дайте ответ цифрой", hintAnswer: "1"}, 
                {word: "ГОРН", solved: false, hint: "Духовой музыкальный инструмент",  hintAchieved: false, hintQuestion: "Вопрос: Какой город является столицей Мадагаскара?", hintAnswer: "антананариву"}, 
                {word: "МИНОР", solved: false, hint: "Музыкальный лад",  hintAchieved: false, hintQuestion: "Вопрос: Что обозначает О3 в химии?", hintAnswer: "озон"}, 
                {word: "ГРИМ", solved: false, hint: "Искусство изменения внешности человека",  hintAchieved: false, hintQuestion: "Вопрос: Единица измерения силы тока?", hintAnswer: "ампер"}, 
                {word: "УГОН", solved: false, hint: "Неправомерное завладение автомобилем",  hintAchieved: false, hintQuestion: "Вопрос: Как называется зеленый пигмент, окрашивающий листья растений", hintAnswer: "хлорофилл"}, 
                {word: "РОГ", solved: false, hint: "Образование из костного вещества на голове животного",  hintAchieved: false, hintQuestion: "Вопрос: Сколько хромосом в геноме человека?", hintAnswer: "46"}]};
    // console.log(level.words[0].word)

    $(".letter").on("click", function(event) {
        // console.log(answers.length)

        $('.window').append(event.target.firstChild.data);

        k = k + 1;
        if (answerWord.length > 13) {
            alert("Вы ввели слишком большое слово! \n\           Я такое не загадывала :( \n\                Попробуйте снова");
            $('.window').empty(event.target.firstChild.data);
            answerWord = ""
        }
       
        answerWord = answerWord + event.target.firstChild.data;
    });


    $("#ok").on("click", function(event) {
        var flag = false
        // console.log(answerWord);
        for (i = 0; i < level.words.length; i++) {

            if (answerWord == level.words[i].word) {
                level.words[i].solved = true;
                flag = true;
                num = i;
                break;
            } 
        }

        if (flag == true) {

            if (level.words[i].solved == true) {
                solvedWords++;
            }
            // console.log($('#L'+i));
            $('#L' + i).empty();
            $('#L' + i).append(level.words[i].word);
            answerWord = ""
            $('.window').empty(event.target.firstChild.data);

            if (solvedWords == level.words.length) {
                alert('Ваууу! Кажется, Вы угадали все слова!!! \n\ Нажимайте на кнопку внизу и переходите на следующий уровень!')
                $('#next').addClass("active");
            }

        } else {
            alert("                                Упс! (0_0) \n\                Кажется, я не загадывала такое слово");
            answerWord = ""
            $('.window').empty(event.target.firstChild.data);
        }

        for (i=0; i < level.words.length; i++) {
            if (level.words[i].solved == false) {
                index = i;
            }
        };
        
    });



    $("#sbros").on("click", function(event) {
        $('.window').empty(event.target.firstChild.data);
        answerWord = ""
    });
    

 
    $("#ask").on("click", function(event) {
        // var print = prompt(level.words[index].hintQuestion);
        // event.preventDefault();
        var t = "";
        $('#question' + index).addClass("indicate");
        console.log(index);
        // $(".modal__content").addClass("open");
        $("[data-close]").on("click", function(event) {
            $(".modal").removeClass("indicate")
            $(".mytext" + index).val('');
        });

        // $(document).ready(function(){
     
            // $(".mytext").keyup(function() {                
        console.log($(".mytext" + index).val())
        $("#answer" + index).on("click", function(event) {
            console.log($(".mytext" + index).val())
            console.log('hey')


            if ($(".mytext" + index).val().toLocaleLowerCase() == level.words[index].hintAnswer) {
                // alert("Вау! Вы правильно ответили на вопрос и теперь можете получить Вашу подсказку");
                $(".modal__hidden").addClass("open");
                $(".modal__content").addClass("hidden");
                $('#h' + index).addClass("show");

                level.words[index].hintAchieved = true;

                $("[data-close]").on("click", function(event) {
                    $(".modal").removeClass("indicate");
                    $(".mytext" + index).val('');
                    $(".modal__content").removeClass("hidden");
                    $(".modal__hidden").removeClass("open");
                    $(".modal__wrong").removeClass("open");
                });
                
                if (level.words[index].hintAchieved == true) {
                    $("#h" + index).on("click", function(event) {
                        // alert(level.words[index].hint)
                        $("#m" + index).addClass("indicate");
                    });
            }

            } else {
                // alert("Ой, кажется Вы неправильно ответили на вопрос. Попробуйте получить подсказку позже")
                $(".mytext").val('');
                $(".modal__content").addClass("hidden");
                $('.modal__wrong').addClass("open");
            };

        })

    });


});