require 'byebug'

class Player
  def hand
    puts "数字を入力してください。"
    puts "0:グー, 1:チョキ, 2:パー"
    # byebug
    input_hand = gets.to_i
    while input_hand
      if input_hand == 0 || input_hand == 1 || input_hand == 2
        return input_hand
      else
        puts "もう一度数字を入力してください。"
        puts "0:グー, 1:チョキ, 2:パー"
        input_hand = gets.to_i
      end
      # input_hand = gets.to_i
    end
  end
end
#.to_i　暗黙変換なし
#場所　多分同じ
class Enemy
  def hand
    rand(0..2)
  end
end

class Janken
  def pon(player_hand, enemy_hand)
    janken = ["グー", "チョキ", "パー"]
    puts "相手の手は#{janken[enemy_hand]}です。"
    if player_hand == enemy_hand
      puts "あいこ"
      return true
    elsif (player_hand == 0 && enemy_hand == 1) || (player_hand == 1 && enemy_hand == 2) || (player_hand == 2 && enemy_hand == 0)
      puts "あなたの勝ちです"
      return false
    else
      puts "あなたの負けです"
      return false
    end
  end
end
player = Player.new
enemy = Enemy.new
janken = Janken.new
next_game = true

while next_game
  next_game = janken.pon(player.hand, enemy.hand)
end
