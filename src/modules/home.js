const mainContainer = document.querySelector('.m-container');

const leaderBoardMarkUp = `
<section class="scores-container">
<div class="refresh-container">
  <h3 class="refresh-title">Recent scores</h3>
  <button type="button" class="refresh-btn">Refresh</button>
</div>

<div class="display-scores">
  <p class="display-status">Refresh to see all leaders scores</p>
  <ul class="player-scores-container"></ul>
</div>
</section>

<section class="add-scores-container">
<h3 class="add-scores-title">Add your score</h3>
<form>
  <label for="add-name">
    <input type="text" name="add-name" id="add-name" placeholder="Your name">
  </label>
  <label for="add-score">
    <input type="text" name="add-score" id="add-score" placeholder="Your score">
  </label>
  <p class="input-msg"></p>
  <button type="submit" class="submit-score">Submit</button>
</form>
</section>
`;

const renderHome = () => {
  mainContainer.insertAdjacentHTML('beforeend', leaderBoardMarkUp);
};

export default renderHome;