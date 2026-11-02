const SPRITE_FRAME_COUNT = 4; // 設定橫向精靈圖的動畫格數。
const CHARACTER_WIDTH = 80; // 設定角色顯示寬度。
const CHARACTER_HEIGHT = 79; // 設定角色顯示高度。
const MOVE_SPEED = 3; // 設定角色每幀的水平移動速度。
const CHARACTER_SPRITE_PATH = new URL("data:image/png;base64,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", document.currentScript.src).href; // 以 sketch.js 所在位置解析精靈圖路徑。

let characterSprite; // 儲存載入的角色精靈圖。
let characterX; // 儲存角色目前的水平位置。
let characterDirection = 1; // 設定角色預設朝左，使用精靈圖原始方向。

function preload() { // 在畫布建立前載入角色精靈圖。
  characterSprite = loadImage(CHARACTER_SPRITE_PATH); // 載入四格跑步精靈圖。
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
