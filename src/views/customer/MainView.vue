<template>
  <v-app>
    <div class="main">
      <div class="sidebar">
        <p class="power">Powered by</p>
        <v-img
          src="@/assets/logo-full.png"
          class="logo"
          height="40px"
          max-height="40px"
          max-width="120px"
          width="120px"
          contain
        ></v-img>

        <div class="new-ticket">
          <p>New Support Ticket</p>
        </div>
        <div class="list">
          <div class="menu">
            <div class="indicator"></div>
            <p class="name">Lorem Ipsum Problem</p>
          </div>
        </div>
      </div>

      <div class="chatroom">
        <div class="dialogues">
          <div class="float-bar">
            <div class="info">
              <p class="name">Support Ticket</p>
              <p class="ticket">Ticket ID 0699420</p>
            </div>

            <div class="cancel">End Chat</div>
          </div>
          <div class="cust">
            <div class="bubble">
              <p class="real">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
              <div class="tl">
                <p class="lang-code">EN</p>
                <p class="tled">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div class="extra-info">
              <p class="time">10.00 AM</p>
              <p class="tl-info">Translated from Spanish</p>
            </div>
          </div>

          <div class="response">
            <div class="bubble">
              <p class="real">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
            <div class="extra-info">
              <div class="read-stat"></div>
              <p class="time">10.00 AM</p>
            </div>
          </div>
        </div>

        <v-textarea
          class="post-sum"
          placeholder="Deskripsi Properti"
          density="compact"
          variant="outlined"
          base-color="#818A91"
          bg-color="#fff"
          color="#363636"
          append-inner-icon="mdi-comment"
        ></v-textarea>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  display: flex;

  .sidebar {
    width: 25%;
    background: $primary-color;
    padding: 2rem;

    .power {
      font-size: 14px;
      color: #d9d9d9;
    }

    .new-ticket {
      margin-top: 2rem;
      padding: 10px;
      background-color: white;
      border-radius: 8px;
      display: flex;
      justify-content: center;

      p {
        text-align: center;
        color: $primary-color;
        font-weight: $font-weight-semibold;
      }
    }
    .list {
      display: flex;
      flex-direction: column;
      margin-top: 1.3rem;

      .menu {
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;

        .indicator {
          width: 2px;
          border-radius: 4px;
          height: 20px;
          background-color: $white;
        }

        .name {
          color: white;
        }
      }
    }
  }

  .post-sum {
    position: absolute;
    z-index: 2;
    width: calc(100vw - 30%);
    bottom: 20px;
  }

  .chatroom {
    background-image: url(@/assets/bg-cust.png);
    background-size: cover;
    width: 75%;
    padding: 30px;

    .float-bar {
      position: sticky;
      top: 0;
      width: fit-content;
      padding: 10px 15px;
      gap: 9rem;
      background-color: $primary-color;
      display: flex;
      border-radius: 15px;
      align-items: center;
      margin: 0 auto 1rem auto;

      .info {
        .name {
          font-size: 18px;
          color: $white;
          font-size: $font-weight-semibold;
        }
        .ticket {
          color: white;
          font-size: 14px;
        }
      }
      .cancel {
        cursor: pointer;
        background-color: #d1494e;
        height: fit-content;
        padding: 3px 10px;
        color: white;
        border-radius: 5px;
      }
    }
    .dialogues {
      display: flex;
      position: relative;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      overflow-y: scroll;
      height: 70%;
      padding-right: 10px;

      .cust {
        max-width: 80%;
        .bubble {
          background-color: #dce0e4;
          padding: 10px 1rem;
          border-radius: 20px;

          .tl {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-top: 1rem;
            .lang-code {
              font-size: 14px;
              font-weight: $font-weight-medium;
            }
            .tled {
              font-weight: $font-weight-medium;
            }
          }
        }
        .extra-info {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 5px 10px;

          p {
            font-size: 12px;
            color: #898989;
          }
        }
      }

      .response {
        max-width: 80%;
        float: right;
        margin-left: auto;
        .bubble {
          background-color: #d3e0ec;
          padding: 10px 1rem;
          border-radius: 20px;

          .real {
            text-align: end;
          }
        }
        .extra-info {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          align-items: center;
          width: 100%;
          padding: 5px 10px;

          .read-stat {
            width: 10px;
            height: 10px;
            background-color: #33b61e;
            border-radius: 30px;
          }

          p {
            font-size: 12px;
            color: #898989;
          }
        }
      }
    }
    .chatroom {
      width: 50%;
      background-color: #f3f4f5;
      background-image: (url(@/assets/bg-record.png));
      background-size: cover;
      padding: 20px;

      .top {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 2px solid #898989;

        .left {
          display: flex;
          align-items: center;
          gap: 1rem;
          .cust-name {
            font-size: 20px;
            font-weight: $font-weight-semibold;
          }

          .part {
            width: 2px;
            border-radius: 5px;
            background-color: #898989;
            height: 20px;
          }

          .type {
            font-weight: $font-weight-medium;
            font-size: 14px;
            color: #898989;
          }
        }

        .info {
          width: 2rem;
          max-width: 2rem;
          height: 2rem;
        }
      }

      .warn {
        font-size: 13px;
        text-align: center;
        margin-top: 10px;
        color: #898989;
      }
    }
  }
}
</style>
