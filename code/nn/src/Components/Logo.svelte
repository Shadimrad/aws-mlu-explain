<script>
  export let aiLogoColor = "black";
  export let robotLogoColor = "black";
</script>

<div id="intro-logo" style="--ai-color: {aiLogoColor}">
  <a href="https://mlu-explain.github.io"
    ><svg width="30" height="30" viewBox="0 0 234 216">
      <g id="mlu_robot 1" clip-path="url(#clip0)">
        <g>
          <path
            id="Vector"
            d="M90.6641 83.1836C96.8828 83.1836 101.941 78.1289 101.941 71.8906V71.8242C101.941 65.5898 96.8945 60.5312 90.6641 60.5312C84.4453 60.5312 79.3828 65.5898 79.3828 71.8242V71.8906C79.3828 78.1289 84.4336 83.1836 90.6641 83.1836Z"
            fill={robotLogoColor}
          />
          <path
            id="Vector_2"
            d="M143.305 83.1836C149.523 83.1836 154.586 78.1289 154.586 71.8906V71.8242C154.586 65.5898 149.535 60.5312 143.305 60.5312C137.09 60.5312 132.027 65.5898 132.027 71.8242V71.8906C132.027 78.1289 137.078 83.1836 143.305 83.1836Z"
            fill={robotLogoColor}
          />
          <path
            id="Vector_3"
            d="M163.586 159.402H173.609V122.641H163.586V159.402Z"
            fill={robotLogoColor}
          />
          <path
            id="Vector_4"
            d="M60.3594 159.402H70.3867V122.641H60.3594V159.402Z"
            fill={robotLogoColor}
          />
          <g id="Group">
            <path
              id="Vector_5"
              d="M182.16 30.0781H51.8047V10.0234H182.16V30.0781ZM182.16 103.609H51.8047V40.1055H182.16V103.609ZM144.559 168.789H89.4062V113.641H144.559V168.789ZM0 0V10.0234H15.8789V46.7891H25.9023V10.0234H41.7812V113.641H79.3867V178.816H96.9297V215.578H106.957V178.816H127.016V215.578H137.039V178.816H154.586V113.641H192.188V10.0234H233.969V0"
              fill={robotLogoColor}
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="233.97" height="215.58" fill="black" />
        </clipPath>
      </defs>
    </svg>
    <h2 class="logo">MLU-EXPL<span id="ai">AI</span>N</h2>
  </a>
</div>

<style>
  #intro-logo {
    display: flex;
    text-transform: uppercase;
    font-weight: bold;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    padding-left: 1rem;
    width: 80%;
    margin: auto;
  }

  #ai {
    color: hsl(359, 69.5%, 74.3%);
  }

  #intro-logo h2 {
    padding-left: 5%;
    font-family: "Amazon Ember Display Heavy";
    font-size: 20px;
    align-self: center;
  }
  #intro-logo > a {
    display: flex;
    text-decoration: none;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    justify-content: center;
    align-items: center;
  }
  .logo {
    color: var(--accent);
    letter-spacing: 2px;
    width: 12rem;
  }

  #intro-logo a:hover {
    background-color: none;
  }

  #intro-logo {
    padding-bottom: 0;
  }

  #intro-logo h2 {
    margin-bottom: 0;
    padding-bottom: 0;
  }
</style>
