<template>
  <v-app>
    <header>
      <div class="contain">
        <div class="left-side">
          <v-img src="@/assets/logo-full.png" class="logo" contain></v-img>
          <div class="divider"></div>
          <div class="menu-dropdown">
            <v-img
              src="@/assets/icon-dashboard.png"
              width="20px"
              height="20px"
              contain
            ></v-img>
            <p class="menu-name">Dashboard</p>
            <v-img
              src="@/assets/chevron-white.png"
              width="16px"
              height="20px"
              contain
            ></v-img>
          </div>
        </div>
        <div class="right-side">
          <v-img
            src="@/assets/agent-raw.png"
            class="admin-photo"
            contain
          ></v-img>
          <div class="control">
            <p class="username">John Doe</p>
            <div class="logout">
              <v-img
                src="@/assets/logout.png"
                width="20px"
                class="logout-icon"
                contain
              ></v-img>
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="main">
      <div class="chatlog">
        <p class="title">Chats</p>
        <div class="search">
          <v-text-field
            density="compact"
            placeholder="Cari Properti"
            append-inner-icon="mdi-magnify"
            variant="outlined"
            v-model="keyword"
            max-wid
          ></v-text-field>
        </div>
        <div class="cust-list">
          <div class="cust">
            <div class="left"></div>
            <div class="right">
              <p class="cust-name">Customer Name 1</p>
              <p class="cust-type">Technical Problem</p>
              <p class="recent-chat">Lorem ipsum dolor sit amet, Lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div class="chatroom">
        <div class="top">
          <div class="left">
            <p class="cust-name">Cust Name 1</p>
            <div class="part"></div>
            <p class="type">Technical Problem</p>
          </div>

          <v-img class="info" src="@/assets/info-icon.png" contain></v-img>
        </div>

        <p class="warn">
          All chats are being recorded, Please do not share any confidential
          Datas.
        </p>

        <div class="dialogues">
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
      </div>
      <div class="aiSummarize">
        <p class="title">Summary</p>
        <div class="box-res">
          <p class="res">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. lorem =
            <br />
            ABC <br />HE wants this <br />aaaaaaaaa
          </p>
          <div class="ai-status">
            <div class="status-color"></div>
            <p class="status">AI On</p>
          </div>
        </div>

        <div class="sentiment">
          <p class="title-senti">Customer Sentiment</p>
          <div class="senti-stat">
            <p class="title-mini">Customer is</p>
            <p class="status angry">Angry</p>
          </div>
        </div>

        <div class="satisfaction">
          <p class="title-sect">Satisfaction Meter</p>
          <v-progress-linear model-value="20" :height="5"></v-progress-linear>
          <p class="percentage">20%</p>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    keyword: null,
  }),
};
</script>

<style lang="scss" scoped>
header {
  background-color: $primary-color;
  background-image: url(@/assets/bg-header.png);
  background-size: cover;
  padding: 15px 30px;

  .contain {
    display: flex;
    justify-content: space-between;

    .left-side {
      display: flex;
      gap: 1.5rem;
      width: fit-content;
      align-items: center;

      .logo {
        height: 40px;
        width: 100px;
      }

      .divider {
        width: 2px;
        border-radius: 100px;
        background-color: white;
        height: 40px;
      }

      .menu-dropdown {
        display: flex;
        gap: 15px;
        align-items: center;

        .menu-name {
          color: white;
          font-size: 20px;
        }
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      gap: 10px;
      .admin-photo {
        width: 40px;
        height: 40px;
        border-radius: 100px;
      }
      .control {
        .username {
          color: white;
        }
        .logout {
          display: flex;
          gap: 5px;
          .logout-icon {
            // height: 15px;
          }
          p {
            font-size: 14px;
            color: #d1494e;
          }
        }
      }
    }
  }
}

.main {
  width: 100vw;
  min-height: calc(100vh - 75px);
  display: flex;
  .chatlog {
    width: 25%;
    padding: 20px 30px;

    .title {
      font-size: 22px;
      font-weight: $font-weight-semibold;
      margin-bottom: 10px;
      width: 100%;
    }

    .cust-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow-y: scroll;
      height: 80%;
      padding-right: 5px;

      .cust {
        display: flex;
        gap: 10px;
        width: 100%;

        .left {
          width: 4px;
          height: initial;
          border-radius: 5px;
          background-color: $primary-color;
        }

        .right {
          width: calc(100% - 14px);
          .cust-name {
            font-weight: $font-weight-semibold;
            font-size: 18px;
          }
          .cust-type {
            font-size: 12px;
            color: #898989;
          }
          .recent-chat {
            font-size: 16px;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
          }
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

    .dialogues {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      overflow-y: scroll;
      height: 85%;
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
  }
  .aiSummarize {
    width: 25%;
    padding: 20px 30px;

    .title {
      font-size: 22px;
      font-weight: $font-weight-semibold;
      margin-bottom: 10px;
      width: 100%;
    }

    .box-res {
      background-color: #f3f4f5;
      padding: 15px;
      border-radius: 10px;
      height: 55%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .res {
        height: 85%;
        overflow-y: scroll;
      }

      .ai-status {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: auto;
        .status-color {
          width: 10px;
          height: 10px;
          background-color: #33b61e;
          border-radius: 10px;
        }
        .status {
          font-weight: $font-weight-semibold;
          color: #33b61e;
        }
      }
    }

    .sentiment {
      margin-top: 1rem;

      .title-senti {
        font-weight: $font-weight-semibold;
        color: $font-color;
        text-align: center;
        margin-bottom: 5px;
      }

      .senti-stat {
        background-color: #f3f4f5;
        padding: 10px;
        border-radius: 10px;
        .title-mini {
          text-align: center;
          color: #898989;
          font-size: 14px;
        }
        .status {
          font-size: 20px;
          margin-top: 5px;
          font-weight: $font-weight-bold;
          text-align: center;

          &.angry {
            color: #b61e1e;
          }
        }
      }
    }

    .satisfaction {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      margin-top: 10px;

      p {
        text-align: center;
        font-weight: $font-weight-semibold;
        color: $font-color;
        text-align: center;
      }
    }
  }
}
</style>
