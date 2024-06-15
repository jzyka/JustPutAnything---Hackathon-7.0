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
            placeholder="Search chats"
            append-inner-icon="mdi-magnify"
            variant="outlined"
            v-model="keyword"
          ></v-text-field>
        </div>
        <div class="cust-list">
          <div
            class="cust"
            v-for="chat in filteredChats"
            :key="chat.customerId"
            @click="selectChat(chat)"
          >
            <div class="left"></div>
            <div class="right">
              <p class="cust-name">{{ chat.customerName }}</p>
              <p class="cust-type">{{ chat.issue }}</p>
              <p class="recent-chat">{{ chat.messages[0].text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="chatroom" v-if="selectedChat">
        <div class="top">
          <div class="left">
            <p class="cust-name">{{ selectedChat.customerName }}</p>
            <div class="part"></div>
            <p class="type">{{ selectedChat.issue }}</p>
          </div>

          <v-img class="info" src="@/assets/info-icon.png" contain></v-img>
        </div>

        <p class="warn">
          All chats are being recorded. Please do not share any confidential
          information.
        </p>

        <div class="dialogues">
          <div
            class="cust"
            v-for="message in selectedChat.messages"
            :key="message.id"
          >
            <div class="bubble">
              <p class="real">{{ message.text }}</p>
              <div class="tl" v-if="message.translatedText">
                <p class="lang-code">{{ message.language }}</p>
                <p class="tled">{{ message.translatedText }}</p>
              </div>
            </div>
            <div class="extra-info">
              <p class="time">{{ message.time }}</p>
              <p class="tl-info" v-if="message.translatedText">
                Translated from {{ message.language }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="aiSummarize" v-if="summary">
        <p class="title">Summary</p>
        <div class="box-res">
          <p class="res">{{ summary.text }}</p>
          <div class="ai-status">
            <div class="status-color"></div>
            <p class="status">AI On</p>
          </div>
        </div>

        <div class="sentiment">
          <p class="title-senti">Customer Sentiment</p>
          <div class="senti-stat">
            <p class="title-mini">Customer is</p>
            <p class="status angry">{{ summary.sentiment }}</p>
          </div>
        </div>

        <div class="satisfaction">
          <p class="title-sect">Satisfaction Meter</p>
          <v-progress-linear
            :model-value="summary.satisfactionMeter"
            :height="5"
          ></v-progress-linear>
          <p class="percentage">{{ summary.satisfactionMeter }}%</p>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    keyword: null,
    chats: [
      {
        customerId: 1,
        customerName: "Alice Johnson",
        issue: "Technical Problem",
        messages: [
          {
            id: 1,
            text: "I'm having trouble connecting to the Wi-Fi. Can you help?",
            translatedText:
              "Estoy teniendo problemas para conectarme a la Wi-Fi. ¿Puedes ayudarme?",
            language: "ES",
            time: "09:30 AM",
          },
          {
            id: 2,
            text: "Sure, have you tried restarting your router?",
            time: "09:32 AM",
          },
        ],
      },
      {
        customerId: 2,
        customerName: "Bob Smith",
        issue: "Billing Issue",
        messages: [
          {
            id: 1,
            text: "I was overcharged on my last bill. Can you explain why?",
            translatedText:
              "Fui sobrecargado en mi última factura. ¿Puedes explicar por qué?",
            language: "ES",
            time: "10:00 AM",
          },
          {
            id: 2,
            text: "Let me check your account for details.",
            time: "10:05 AM",
          },
        ],
      },
      {
        customerId: 3,
        customerName: "Charlie Davis",
        issue: "General Inquiry",
        messages: [
          {
            id: 1,
            text: "What are your customer service hours?",
            translatedText: "¿Cuáles son las horas de servicio al cliente?",
            language: "ES",
            time: "11:15 AM",
          },
          {
            id: 2,
            text: "Our customer service is available 24/7.",
            time: "11:16 AM",
          },
        ],
      },
      {
        customerId: 4,
        customerName: "Dana White",
        issue: "Product Inquiry",
        messages: [
          {
            id: 1,
            text: "Can you tell me more about the features of your latest product?",
            translatedText:
              "¿Puedes contarme más sobre las características de tu último producto?",
            language: "ES",
            time: "12:00 PM",
          },
          {
            id: 2,
            text: "Of course! Our latest product offers a variety of new features including...",
            time: "12:05 PM",
          },
        ],
      },
    ],
    summary: {
      text: "",
      sentiment: "",
      satisfactionMeter: 0,
    },
    selectedChat: null,
  }),
  mounted() {
    this.loadDummyData();
  },
  methods: {
    loadDummyData() {
      this.selectedChat = this.chats[0]; // Default to the first chat
      this.updateSummary(this.selectedChat); // Update summary for initial selected chat
    },
    selectChat(chat) {
      this.selectedChat = chat;
      this.updateSummary(chat); // Update summary when a new chat is selected
    },
    updateSummary(chat) {
      // Constructing the summary text dynamically based on the selected chat
      let summaryText = `${chat.customerName} `;
      if (chat.issue === "Technical Problem") {
        summaryText += `is facing technical issues.`;
      } else if (chat.issue === "Billing Issue") {
        summaryText += `has billing inquiries.`;
      } else if (chat.issue === "General Inquiry") {
        summaryText += `has general inquiries.`;
      }

      // Set the summary object
      this.summary.text = summaryText;
      // Example sentiment and satisfaction meter values (adjust as needed)
      this.summary.sentiment = "Neutral";
      this.summary.satisfactionMeter = 50;
    },
  },
  computed: {
    filteredChats() {
      if (!this.keyword) {
        return this.chats;
      }
      const lowerKeyword = this.keyword.toLowerCase();
      return this.chats.filter(
        (chat) =>
          chat.customerName.toLowerCase().includes(lowerKeyword) ||
          chat.issue.toLowerCase().includes(lowerKeyword)
      );
    },
  },
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
