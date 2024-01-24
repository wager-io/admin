<script>
  import "../styles/foooter/footer.css";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import RiSystemArrowDropUpLine from "svelte-icons-pack/ri/RiSystemArrowDropUpLine";
</script>

<div class={"footer-general"}>
  <div class="footer-general-contaner">
    <div class="footer-logo">
      <div class="logo">
        <img
          src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1698231569/dpp-logowhite_qv3nij.png"
          alt="footer1"
        />
      </div>
      <div class="footer-text1">
        <h4>
          DOTPLAYPLAY is built by gamblers for gamblers. With our unique
          community and a huge selection of games like Crash, HashDice, Plinko,
          Slots, and many more. Your greatest casino adventure is waiting for
          you!
        </h4>
      </div>
    </div>

    <div class="footer-contacts-text">
      <div class="footer-text2">
        <div class="footer-text-content">
          <a href="/">HELP CENTER</a>
        </div>
        <div class="footer-text-content">
          <a href="/">TERMS OF SERVICE</a>
        </div>
        <div class="footer-text-content">
          <a href="/">USER AGREEMENT</a>
        </div>
        <div class="footer-text-content">
          <a href="/">APP</a>
        </div>
      </div>
    </div>

    <div class="footer-contacts">
      <div class="footer-help">
        <h4>CONTACT US</h4>
        <h4>
          Help: <a href="/">help.Dotplayplay.com</a>
        </h4>
      </div>
    </div>
  </div>

  <div class="footer-last">
    <div class="footer-last-row">
      <h4>1USDT=$1USD</h4>
    </div>
    <div class="footer-last-row2">
      <div class="copyright">
        <h4>©2023 Dotplayplay.COM ALL RIGHTS RESERVED</h4>
      </div>
      <div class="footer-top-arrow">
        <Icon
          src={RiSystemArrowDropUpLine}
          size="18"
          color="rgba(153, 164, 176, 0.6)"
          className="custom-icon"
          title="arror"
        />
        <span>Top</span>
      </div>
    </div>
  </div>
</div>


