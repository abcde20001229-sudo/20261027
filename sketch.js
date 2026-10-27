const SPRITE_FRAME_COUNT = 4; // 設定橫向精靈圖的動畫格數。
const CHARACTER_WIDTH = 80; // 設定角色顯示寬度。
const CHARACTER_HEIGHT = 79; // 設定角色顯示高度。
const MOVE_SPEED = 3; // 設定角色每幀的水平移動速度。

let characterSprite; // 儲存載入的角色精靈圖。
let characterX; // 儲存角色目前的水平位置。
let characterDirection = 1; // 設定角色預設朝左，使用精靈圖原始方向。

function preload() { // 在畫布建立前載入角色精靈圖。
  characterSprite = loadImage("左跑all.png"); // 載入工作資料夾中的四格跑步精靈圖。
} // 結束圖片載入函式。

function setup() { // 初始化全螢幕畫布與角色位置。
  createCanvas(windowWidth, windowHeight); // 建立符合目前視窗大小的畫布。
  imageMode(CENTER); // 將圖片定位方式設定為以中心點繪製。
  characterX = width / 2; // 將角色放在畫面水平中央。
} // 結束初始化函式。

function draw() { // 每一幀更新並繪製畫面。
  background("#fefae0"); // 使用指定的淡黃色作為畫布背景。

  let isMoving = false; // 記錄本幀角色是否正在移動。
  if (keyIsDown(LEFT_ARROW)) { // 檢查使用者是否按住鍵盤左鍵。
    characterX -= MOVE_SPEED; // 按住左鍵時讓角色往左移動。
    characterDirection = 1; // 設定角色朝左顯示，維持精靈圖原始方向。
    isMoving = true; // 標記角色正在移動以播放跑步動畫。
  } // 結束左鍵控制。
  if (keyIsDown(RIGHT_ARROW)) { // 檢查使用者是否按住鍵盤右鍵。
    characterX += MOVE_SPEED; // 按住右鍵時讓角色往右移動。
    characterDirection = -1; // 設定角色朝右顯示，水平翻轉精靈圖。
    isMoving = true; // 標記角色正在移動以播放跑步動畫。
  } // 結束右鍵控制。

  characterX = constrain(characterX, CHARACTER_WIDTH / 2, width - CHARACTER_WIDTH / 2); // 限制角色不會移出畫布左右邊界。

  let frameIndex = isMoving ? floor(frameCount / 8) % SPRITE_FRAME_COUNT : 0; // 移動時循環播放四格動畫，停止時顯示第一格。
  let sourceFrameWidth = characterSprite.width / SPRITE_FRAME_COUNT; // 根據實際圖片寬度平均計算每格來源寬度。

  push(); // 暫存畫布狀態以便只翻轉角色圖片。
  translate(characterX, height / 2); // 將座標原點移至角色在畫面中的位置。
  scale(characterDirection, 1); // 依行走方向水平翻轉精靈圖。
  image( // 繪製目前動畫格並縮放至指定尺寸。
    characterSprite, // 指定要繪製的角色精靈圖。
    0, // 將圖片中心放在目前座標原點的水平位置。
    0, // 將圖片中心放在目前座標原點的垂直位置。
    CHARACTER_WIDTH, // 設定角色繪製寬度為 80 像素。
    CHARACTER_HEIGHT, // 設定角色繪製高度為 79 像素。
    frameIndex * sourceFrameWidth, // 設定來源裁切區域的水平起點。
    0, // 設定來源裁切區域的垂直起點。
    sourceFrameWidth, // 設定來源裁切區域的寬度。
    characterSprite.height // 設定來源裁切區域的完整圖片高度。
  ); // 結束繪製目前動畫格。
  pop(); // 還原畫布狀態以免影響其他繪製。
} // 結束每幀更新與繪製函式。

function windowResized() { // 視窗尺寸改變時同步調整畫布。
  resizeCanvas(windowWidth, windowHeight); // 讓畫布持續填滿整個視窗。
  characterX = constrain(characterX, CHARACTER_WIDTH / 2, width - CHARACTER_WIDTH / 2); // 將角色維持在新畫布的左右範圍內。
} // 結束視窗縮放處理函式。

function keyPressed() { // 接收鍵盤按鍵以阻止方向鍵捲動網頁。
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) { // 判斷按下的是否為左右方向鍵。
    return false; // 阻止瀏覽器以方向鍵捲動頁面。
  } // 結束方向鍵判斷。
} // 結束鍵盤按下處理函式。
