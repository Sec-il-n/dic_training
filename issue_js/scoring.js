$(document).ready(function(){
// ①入力値を取得して合計点と平均点を出す
  function score_indicate(){
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]の入力値
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
  // 合計点
    // let sum = subject_points[0];
    // sum = sum + subject_points[1];
    // sum = sum + subject_points[2];
    // sum = sum + subject_points[3];
    // sum = sum + subject_points[4];
    let sum =
    subject_points.reduce(function(pre, current, currentIndex, arr){
      return pre + current
    });
    $("#sum_indicate").text(sum);//htmi l.20
    // 平均値(平均をとりたい数の合計点数(sum) / 全体の個数)
    let average = sum / subject_points.length
    $("#average_indicate").text(average);
  };
  // ②取得した平均点数からランク分け("A", "B", "C", "D")
  function get_achievement(){
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)//平均点がコンソールに出る
    // もし「averageIndicate」が80以上なら"A"を返します。
    if (averageIndicate >= 80){
      return "A";
      // もし「averageIndicate」が60以上なら"B"を返します。
    } else if (averageIndicate >= 60) {
      return "B";
      // もし「averageIndicate」が40以上なら"C"を返します。
    } else if (averageIndicate >= 40) {
      return "c";
      // もし「averageIndicate」がそれ以外の点数なら"D"を返します。
    } else {
      return "D";
    }
  };
  // ③各教科の点数から合格/不合格の判断
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // 変数「number」に入力した教科の数を代入します。
    let number = subject_points.length;
    // 変数「judge」に"合格"を代入しておきます。
    let judge = "合格";
    // 入力したそれぞれの教科の点数が60点よりも低いと変数「judge」に"不合格"を再代入して「judge」を返します。
    for(let i=0 ; i < number; i++){
      if (subject_points[i] < 60){
        judge = "不合格";
      }
      return judge;
    }

    return pass_or_failure;
  };
  // ④
  function judgement(){
    // 各教科A〜D
    let achievement = get_achievement();
    // 合否
    let pass_or_failure = get_pass_or_failure();
    // 最終ジャッジ l.28<label>に追加する
      $('#declaration').empty();//子要素のみ空にする
      $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}で${pass_or_failure}です</label>`);
  };
  // 各教科の特典が入力された時　①入力値配列に格納
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  // l.24 ランクボタン→<label>要素書き換え
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  // l.26 判定ボタン→<label>要素書き換え
  $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  // l.28 最終ジャッジボタン→<label>要素書き換え
  $('#btn-declaration').click(function() {
    judgement();
  });
});
