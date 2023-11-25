"use client";
import React, { useState } from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Image from "next/image";
import avatar from "@/public/avatar.png";
import board from "@/public/board.svg";
import Link from "next/link";
const SideBar = () => {
  const LiList = [
    {
      svg: (
        <>
          <path d="M19.7505 6.80644L19.4739 6.89644L18.0005 7.02644L17.5772 7.69311L17.2739 7.59644L16.0772 6.53311L15.9039 5.97977L15.6672 5.38644L14.9239 4.71977L14.0472 4.54977L14.0272 4.94977L14.8872 5.78977L15.3072 6.28311L14.8339 6.53311L14.4505 6.41977L13.8739 6.17644V5.71311L13.1405 5.39977L12.8905 6.49644L12.1272 6.66644L12.2039 7.27977L13.2039 7.46977L13.3772 6.49311L14.1972 6.61644L14.5772 6.83977H15.1905L15.6005 7.66644L16.7139 8.79311L16.6305 9.23311L15.7339 9.11977L14.1872 9.89977L13.0739 11.2331L12.9305 11.8264H12.5272L11.7839 11.4931L11.0605 11.8264L11.2405 12.5898L11.5539 12.2264H12.1105L12.0705 12.8931L12.5305 13.0264L13.0005 13.5564L13.7339 13.3331L14.5905 13.4664L15.5905 13.7331L16.0839 13.7931L16.9239 14.7464L18.5472 15.6998L17.4972 17.6998L16.3905 18.2131L15.9705 19.3598L14.3672 20.4298L14.1972 21.0464C15.6539 20.6906 17.0034 19.989 18.1314 19.001C19.2594 18.0131 20.1328 16.7679 20.6777 15.3708C21.2225 13.9738 21.4227 12.4661 21.2613 10.9753C21.0999 9.48449 20.5817 8.05452 19.7505 6.80644Z" />
          <path d="M13.0742 16.877L12.4075 15.617L13.0175 14.3337L12.3942 14.147L11.6942 13.4437L10.1408 13.1104L9.62752 12.0004V12.6404H9.40085L8.06752 10.827V9.33369L7.08752 7.74036L5.53085 8.01703H4.47752L3.94752 7.68369L4.61418 7.15036L3.94752 7.30369C3.12212 8.72113 2.68484 10.3311 2.67973 11.9713C2.67463 13.6116 3.10187 15.2242 3.91843 16.6467C4.73498 18.0693 5.91201 19.2515 7.33095 20.0744C8.74988 20.8972 10.3606 21.3316 12.0008 21.3337C12.3922 21.3296 12.7829 21.3018 13.1708 21.2504L13.0742 20.1204C13.0742 20.1204 13.5042 18.4537 13.5042 18.387C13.5042 18.3204 13.0742 16.877 13.0742 16.877Z" />
          <path d="M6.13617 5.66625L7.80284 5.43291L8.56617 5.01625L9.42617 5.26291L10.7995 5.18625L11.2728 4.44625L11.9562 4.55958L13.6228 4.40291L14.0828 3.89625L14.7495 3.46625L15.6628 3.60291L15.9962 3.55291C14.1224 2.66468 12.0055 2.42793 9.9818 2.88026C7.95807 3.3326 6.14348 4.44808 4.82617 6.04958L6.13617 5.66625ZM12.3928 3.59291L13.3328 3.06958L13.9462 3.42291L13.0595 4.08958L12.2128 4.17625L11.8328 3.92958L12.3928 3.59291ZM9.5695 3.66625L9.9995 3.84625L10.5428 3.66625L10.8428 4.18625L9.5695 4.51958L8.9595 4.16625C8.9595 4.16625 9.55617 3.78291 9.5695 3.66625Z" />
        </>
      ),
      name: "News Feed",
      path: "/newfeed",
    },
    {
      svg: (
        <>
          <path d="M13.4347 0.600464C13.3679 0.605249 13.3033 0.626412 13.2466 0.6621C13.1899 0.697789 13.1429 0.746892 13.1097 0.805071L7.81401 9.97627C7.7783 10.0384 7.7596 10.1088 7.75977 10.1804C7.75994 10.252 7.77898 10.3224 7.81498 10.3843C7.85098 10.4462 7.90266 10.4976 7.96482 10.5332C8.02698 10.5688 8.09743 10.5874 8.16906 10.5871C9.47773 10.5871 10.784 10.5871 12.0927 10.5871L10.4288 16.8005C10.4034 16.8959 10.4135 16.9972 10.4572 17.0857C10.5009 17.1742 10.5752 17.2438 10.6664 17.2817C10.7575 17.3195 10.8593 17.3231 10.9528 17.2916C11.0464 17.2601 11.1253 17.1957 11.175 17.1104L16.4707 7.93622C16.5062 7.87434 16.5249 7.80421 16.5249 7.73283C16.5249 7.66146 16.5061 7.59133 16.4704 7.52949C16.4348 7.46766 16.3836 7.41627 16.3218 7.38046C16.2601 7.34464 16.19 7.32565 16.1186 7.32541C14.8097 7.32542 13.5009 7.32541 12.192 7.32541L13.8559 1.11198C13.8726 1.04938 13.8741 0.983733 13.8603 0.920444C13.8465 0.857156 13.8178 0.798042 13.7767 0.748042C13.7355 0.698043 13.683 0.65857 13.6235 0.632904C13.564 0.607238 13.4993 0.596127 13.4347 0.600464Z" />
          <path d="M4.66305 5.17963C3.54175 5.17963 2.625 6.09869 2.625 7.21916C2.625 8.33964 3.54175 9.25573 4.66305 9.25573C5.78434 9.25573 6.7011 8.33964 6.7011 7.21916C6.7011 6.09869 5.78434 5.17963 4.66305 5.17963Z" />
          <path d="M4.66397 10.0712C2.41342 10.0712 0.587891 11.8949 0.587891 14.1468V14.5562C0.58808 14.6097 0.598812 14.6627 0.619475 14.7121C0.640138 14.7615 0.670326 14.8064 0.708316 14.8441C0.746306 14.8819 0.791352 14.9117 0.840883 14.932C0.890414 14.9524 0.943459 14.9627 0.996988 14.9625H8.33094C8.38447 14.9627 8.43752 14.9524 8.48706 14.932C8.53659 14.9117 8.58164 14.8819 8.61963 14.8441C8.65763 14.8064 8.68782 14.7615 8.70848 14.7121C8.72915 14.6627 8.73988 14.6097 8.74007 14.5562V14.1468C8.74007 11.8949 6.91453 10.0712 4.66397 10.0712Z" />
          <path d="M19.3364 5.17963C18.2159 5.17963 17.2969 6.09869 17.2969 7.21916C17.2969 8.33964 18.2159 9.25573 19.3364 9.25573C20.4569 9.25573 21.373 8.33964 21.373 7.21916C21.373 6.09869 20.4569 5.17963 19.3364 5.17963Z" />
          <path d="M19.3374 10.0703C17.086 10.0703 15.2598 11.8939 15.2598 14.1458V14.5552C15.2601 14.6628 15.3031 14.766 15.3792 14.8421C15.4553 14.9182 15.5584 14.9612 15.666 14.9616H23.0057C23.1133 14.9612 23.2164 14.9182 23.2925 14.8421C23.3686 14.766 23.4116 14.6628 23.4119 14.5552V14.1458C23.4119 11.8939 21.5887 10.0703 19.3374 10.0703Z" />
        </>
      ),
      name: "Leagues",
      path: "/leagues",
    },
    {
      svg: (
        <>
          <path d="M22.0004 8.16271V8.23524C22.0004 9.09598 22.0004 9.52635 21.7932 9.87847C21.586 10.2306 21.2098 10.4396 20.4574 10.8576L19.6641 11.2984C20.2107 9.45021 20.3931 7.46451 20.4606 5.76634C20.4634 5.69353 20.4667 5.61982 20.47 5.54534L20.4723 5.49316C21.1236 5.71933 21.4892 5.88795 21.7173 6.20445C22.0005 6.59729 22.0005 7.1191 22.0004 8.16271Z" />
          <path d="M2 8.16187V8.2344C2.00003 9.09514 2.00004 9.52551 2.20723 9.87763C2.41442 10.2297 2.79063 10.4387 3.54305 10.8567L4.33681 11.2977C3.79007 9.44954 3.60767 7.46375 3.54025 5.7655C3.53736 5.69269 3.5341 5.61898 3.53081 5.5445L3.5285 5.49219C2.87701 5.71843 2.51126 5.88705 2.2831 6.20361C1.99996 6.59645 1.99997 7.11826 2 8.16187Z" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0007 2C13.7842 2 15.2536 2.15709 16.3776 2.34674C17.5164 2.53887 18.0857 2.63494 18.5614 3.22083C19.0372 3.80673 19.012 4.43998 18.9617 5.70647C18.7891 10.0545 17.8508 15.4853 12.7505 15.9657V19.5H14.1807C14.6574 19.5 15.0678 19.8365 15.1613 20.3039L15.3505 21.25H18.0005C18.4147 21.25 18.7505 21.5858 18.7505 22C18.7505 22.4142 18.4147 22.75 18.0005 22.75H6.00049C5.58628 22.75 5.25049 22.4142 5.25049 22C5.25049 21.5858 5.58628 21.25 6.00049 21.25H8.65049L8.83971 20.3039C8.9332 19.8365 9.34361 19.5 9.82029 19.5H11.2505V15.9657C6.15045 15.4851 5.21218 10.0544 5.03956 5.70647C4.98928 4.43998 4.96414 3.80673 5.43986 3.22083C5.91557 2.63494 6.48494 2.53887 7.62367 2.34674C8.74773 2.15709 10.2171 2 12.0007 2ZM12.9529 6.19887L12.8546 6.02251C12.4746 5.34084 12.2846 5 12.0005 5C11.7164 5 11.5264 5.34084 11.1464 6.02251L11.0481 6.19887C10.9402 6.39258 10.8862 6.48944 10.802 6.55334C10.7178 6.61725 10.613 6.64097 10.4033 6.68841L10.2124 6.73161C9.47445 6.89857 9.1055 6.98205 9.01772 7.26432C8.92994 7.54659 9.18146 7.84072 9.68452 8.42898L9.81467 8.58117C9.95762 8.74833 10.0291 8.83191 10.0613 8.93532C10.0934 9.03872 10.0826 9.15023 10.061 9.37327L10.0413 9.57632C9.96525 10.3612 9.92723 10.7536 10.157 10.9281C10.3869 11.1025 10.7323 10.9435 11.4232 10.6254L11.6019 10.5431C11.7983 10.4527 11.8964 10.4075 12.0005 10.4075C12.1046 10.4075 12.2027 10.4527 12.3991 10.5431L12.5778 10.6254C13.2687 10.9435 13.6141 11.1025 13.844 10.9281C14.0738 10.7536 14.0357 10.3612 13.9597 9.57632L13.94 9.37327C13.9184 9.15023 13.9076 9.03872 13.9397 8.93532C13.9719 8.83191 14.0434 8.74833 14.1863 8.58117L14.3165 8.42898C14.8195 7.84072 15.0711 7.54659 14.9833 7.26432C14.8955 6.98205 14.5265 6.89857 13.7886 6.73161L13.5977 6.68841C13.388 6.64097 13.2832 6.61725 13.199 6.55334C13.1148 6.48944 13.0608 6.39258 12.9529 6.19887Z"
          />
        </>
      ),
      name: "Tournaments",
      path: "/tournaments",
    },

    {
      svg: (
        <>
          <path d="M10.934 7.62258C10.934 7.62258 10.9203 7.62234 10.8939 7.62186C10.8675 7.62114 10.8279 7.62138 10.7782 7.61682C10.6791 7.6077 10.5301 7.59978 10.3477 7.57026C10.1641 7.54266 9.94447 7.49874 9.69535 7.43394C9.57079 7.40154 9.44071 7.36074 9.30223 7.3173C9.16519 7.27146 9.02263 7.2177 8.87311 7.15914C8.72575 7.09722 8.57335 7.02738 8.41519 6.9501C8.25943 6.86922 8.09959 6.77874 7.93519 6.67698C7.77343 6.5721 7.60975 6.45354 7.44247 6.31794C7.27735 6.18066 7.11487 6.01914 6.95335 5.82978C6.87223 5.73378 6.79567 5.62962 6.72295 5.51106C6.64999 5.39418 6.57991 5.26602 6.51943 5.1213C6.39391 4.83834 6.31903 4.47498 6.34495 4.09218C6.35911 3.90138 6.39895 3.71082 6.45919 3.53226C6.52279 3.35394 6.60727 3.19482 6.69895 3.04842L6.76999 2.94354L6.78799 2.91762L6.81295 2.8845L6.83503 2.85498L6.85711 2.8257C6.86431 2.8161 6.87079 2.80722 6.88519 2.7897L6.96007 2.69802C7.05607 2.58474 7.15135 2.4825 7.27207 2.37978C7.50583 2.17794 7.80199 1.97898 8.17735 1.8633C8.36311 1.8069 8.56567 1.77714 8.76511 1.77546C8.96479 1.77378 9.16087 1.80162 9.33919 1.84986C9.51799 1.89738 9.67951 1.9653 9.82159 2.04474C9.96415 2.12322 10.0894 2.20986 10.202 2.29914C10.4278 2.47674 10.5997 2.66946 10.7434 2.86026C10.8166 2.9553 10.8807 3.05034 10.9422 3.14442C11.0019 3.23874 11.0547 3.3345 11.1037 3.42834C11.2016 3.61626 11.287 3.79842 11.3528 3.98034C11.4901 4.34034 11.5762 4.68426 11.6343 5.0013C11.6919 5.31882 11.7195 5.61018 11.7294 5.86818C11.7392 6.12642 11.7325 6.35082 11.7178 6.53562C11.7066 6.7197 11.679 6.86586 11.6667 6.96354C11.66 7.0125 11.6545 7.06962 11.6497 7.09506C11.6446 7.1205 11.6458 7.15242 11.6458 7.15242L11.5249 7.17714C11.5249 7.17714 11.51 7.11066 11.4896 7.02138C11.4682 6.93234 11.4354 6.79218 11.3905 6.62754C11.3458 6.46266 11.287 6.2589 11.2126 6.0333C11.1382 5.8077 11.0454 5.55426 10.9362 5.28402C10.826 5.01426 10.6935 4.72626 10.531 4.43658C10.3676 4.1481 10.1751 3.85314 9.93487 3.58938C9.81487 3.45786 9.68263 3.33426 9.53647 3.23082C9.39031 3.12834 9.22951 3.04506 9.05935 3.00498C8.88967 2.96418 8.71255 2.96994 8.54647 3.0249C8.37967 3.07818 8.22655 3.17946 8.08975 3.30138C8.02135 3.36234 7.95751 3.43098 7.89559 3.49962C7.86607 3.53418 7.83631 3.5685 7.80583 3.60834L7.78303 3.63714L7.77343 3.64962L7.76359 3.6633L7.72471 3.7185C7.62511 3.86778 7.56031 4.03434 7.54207 4.20642C7.52551 4.37874 7.55215 4.55466 7.61287 4.72026C7.67167 4.88658 7.76143 5.04258 7.86151 5.18802C8.06527 5.47842 8.31511 5.72634 8.56447 5.9445C8.81527 6.16266 9.06895 6.3513 9.30919 6.5169C9.79183 6.84498 10.2111 7.09674 10.5109 7.2609C10.8102 7.42602 10.9858 7.51026 10.9858 7.51026L10.934 7.62258Z" />
          <path d="M13.5735 7.89246C13.5735 7.89246 13.5867 7.89606 13.6121 7.90302C13.6376 7.9095 13.6757 7.92078 13.7244 7.93014C13.8224 7.94934 13.9676 7.98342 14.1509 8.00598C14.335 8.03094 14.558 8.05038 14.8152 8.05782C14.9439 8.06166 15.0802 8.05878 15.2252 8.0559C15.3699 8.05014 15.5216 8.03838 15.6814 8.02422C15.84 8.00622 16.0061 7.98174 16.1796 7.95174C16.3517 7.91766 16.5305 7.87566 16.7168 7.82382C16.9016 7.76862 17.0916 7.70046 17.2901 7.61694C17.4872 7.5315 17.6883 7.42206 17.8964 7.28526C18.0012 7.21566 18.104 7.13718 18.2072 7.04382C18.3099 6.9519 18.4128 6.8487 18.5115 6.72654C18.7114 6.49014 18.8852 6.16206 18.967 5.78742C19.0068 5.60046 19.022 5.4063 19.014 5.2179C19.003 5.02902 18.9665 4.85238 18.9192 4.6863L18.8804 4.56582L18.8703 4.53582L18.8556 4.49718L18.8427 4.46286L18.8295 4.4283C18.8252 4.41726 18.8216 4.40694 18.8129 4.38582L18.7666 4.27662C18.7061 4.14102 18.643 4.01622 18.5564 3.88398C18.3884 3.62454 18.1599 3.35094 17.8318 3.13446C17.6688 3.02814 17.4831 2.94318 17.292 2.88582C17.1005 2.82822 16.9047 2.80014 16.7199 2.79654C16.5348 2.79198 16.3608 2.8119 16.2024 2.84838C16.0436 2.88366 15.8991 2.9319 15.7661 2.98614C15.4997 3.09342 15.2806 3.23022 15.0893 3.37326C14.9924 3.44406 14.9043 3.5175 14.8191 3.59046C14.7353 3.66414 14.6576 3.74142 14.5844 3.8175C14.438 3.97062 14.3048 4.12158 14.1908 4.27782C13.9582 4.58526 13.7792 4.89102 13.6347 5.17926C13.4904 5.46774 13.3824 5.7399 13.3008 5.98494C13.219 6.22998 13.1628 6.44742 13.1252 6.62886C13.0844 6.80862 13.0702 6.95694 13.0546 7.05414C13.0474 7.1031 13.0368 7.1595 13.034 7.18518C13.0318 7.21086 13.0215 7.24134 13.0215 7.24134L13.1307 7.29894C13.1307 7.29894 13.1636 7.23918 13.2082 7.15926C13.2533 7.07982 13.3246 6.95454 13.4136 6.8091C13.5027 6.66342 13.6162 6.48414 13.7506 6.28854C13.8852 6.09294 14.0456 5.87526 14.2258 5.64654C14.407 5.41854 14.6146 5.17902 14.852 4.94646C15.0893 4.71534 15.3569 4.48614 15.6615 4.30014C15.8132 4.2075 15.9749 4.12566 16.1444 4.06758C16.3131 4.00998 16.4909 3.97518 16.6656 3.9843C16.8399 3.99294 17.0084 4.04814 17.1521 4.14702C17.2973 4.24494 17.4164 4.38486 17.5133 4.54038C17.5618 4.6179 17.604 4.70166 17.6441 4.78494C17.6631 4.82646 17.6818 4.86774 17.6998 4.91478L17.7137 4.94886L17.7192 4.9635L17.7245 4.97934L17.7466 5.04342C17.8006 5.21478 17.816 5.39262 17.7852 5.56326C17.7528 5.73318 17.6782 5.89446 17.5733 6.03654C17.4701 6.17982 17.3405 6.30438 17.2035 6.41598C16.9268 6.63798 16.6176 6.80598 16.3172 6.94566C16.0152 7.08486 15.7188 7.19478 15.4421 7.28646C14.8868 7.46646 14.4137 7.59078 14.0799 7.66422C13.7463 7.7391 13.5543 7.77054 13.5543 7.77054L13.5735 7.89246Z" />
          <path d="M10.963 8.88H13.4386C13.4386 8.88 13.4902 7.668 12.2266 7.668C10.963 7.668 10.963 8.88 10.963 8.88Z" />
          <path d="M21.1209 9.36035H14.8809V13.9204H21.1209V9.36035Z" />
          <path d="M9.60086 9.36035H2.88086V13.9204H9.60086V9.36035Z" />
          <path d="M14.4 9.12H10.08V22.32H14.4V9.12Z" />
          <path d="M9.59984 14.4004H3.83984V22.3204H9.59984V14.4004Z" />
          <path d="M19.9209 14.4004H14.8809V22.3204H19.9209V14.4004Z" />
        </>
      ),
      name: "Redeem",
      path: "/redeem",
    },
    {
      svg: (
        <>
          <path d="M7.71429 4.85714V19.1429C7.71429 20.6735 6.4898 22 4.85714 22C3.22449 22 2 20.6735 2 19.1429V4.85714C2 3.32653 3.22449 2 4.85714 2C6.4898 2 7.71429 3.32653 7.71429 4.85714Z" />
          <path d="M14.8571 9.95918V19.1429C14.8571 20.6735 13.6327 22 12 22C10.3673 22 9.14286 20.6735 9.14286 19.1429V9.95918C9.14286 8.42857 10.3673 7.10204 12 7.10204C13.6327 7.10204 14.8571 8.42857 14.8571 9.95918Z" />
          <path d="M22 4.85714V19.1429C22 20.6735 20.7755 22 19.1429 22C17.5102 22 16.2857 20.7755 16.2857 19.1429V4.85714C16.2857 3.32653 17.5102 2 19.1429 2C20.7755 2 22 3.32653 22 4.85714Z" />
        </>
      ),
      name: "Leaderboards",
      path: "/leaderboards",
    },
    {
      svg: (
        <>
          <path d="M12.7141 2.00036C13.2641 1.99036 13.7851 2.18936 14.1741 2.57036C14.5651 2.93936 14.7741 3.45036 14.7741 3.99036C14.7741 5.09036 15.6841 5.98136 16.8151 5.98136C17.1641 5.98136 17.5141 5.88036 17.8251 5.71036C18.7941 5.18936 20.0041 5.52036 20.5541 6.45036L21.2351 7.62036C21.4051 7.92036 21.5041 8.26036 21.5041 8.61036C21.5041 9.32036 21.1151 9.98136 20.4851 10.3304C20.1741 10.5004 19.9141 10.7604 19.7351 11.0614C19.2041 12.0004 19.5351 13.1894 20.4851 13.7314C21.4441 14.2804 21.7741 15.4814 21.2351 16.4304L20.5541 17.5614C20.1941 18.1804 19.5241 18.5614 18.8041 18.5614C18.4441 18.5614 18.0841 18.4704 17.7851 18.2904C17.4641 18.1204 17.1151 18.0204 16.7641 18.0204C16.2241 18.0204 15.7041 18.2314 15.3251 18.6104C14.9341 18.9814 14.7241 19.4904 14.7241 20.0204C14.7241 21.1104 13.8151 22.0004 12.6841 22.0004H11.3151C10.7741 22.0004 10.2641 21.7804 9.89413 21.4104C9.51413 21.0304 9.31513 20.5304 9.31513 20.0104C9.31513 18.9104 8.41413 18.0204 7.28513 18.0204C6.91413 18.0204 6.55413 18.1204 6.24413 18.3114C5.77413 18.5704 5.21413 18.6404 4.69413 18.5104C4.17413 18.3704 3.72413 18.0304 3.45413 17.5804L2.81513 16.4504C2.51413 15.9814 2.42413 15.4204 2.56513 14.8904C2.70413 14.3604 3.06513 13.9104 3.55413 13.6404C3.86513 13.4704 4.12413 13.2204 4.30413 12.9104C4.82513 11.9704 4.49413 10.7904 3.55413 10.2404C2.60413 9.70036 2.27413 8.51036 2.81513 7.57036L3.45413 6.45036C3.72413 5.98136 4.17413 5.64036 4.70413 5.50036C5.23513 5.36036 5.79413 5.43936 6.26413 5.71036C6.58413 5.88036 6.93413 5.97036 7.28513 5.97036C7.82513 5.97036 8.34413 5.76036 8.72413 5.39036C9.10413 5.02036 9.31513 4.51036 9.31513 3.99036C9.31513 2.89036 10.2241 2.00036 11.3541 2.00036H12.7141ZM13.1151 9.48136C12.0651 9.05036 10.8541 9.28036 10.0441 10.0704C9.24413 10.8504 8.99413 12.0404 9.43413 13.0614C9.86513 14.0904 10.8841 14.7604 12.0241 14.7604H12.0351C12.7851 14.7704 13.4851 14.4814 14.0141 13.9604C14.5441 13.4504 14.8441 12.7504 14.8441 12.0204C14.8541 10.9104 14.1641 9.90036 13.1151 9.48136Z" />
        </>
      ),
      name: "Setting",
      path: "/setting",
    },
  ];
  //=======================================
  const [activeLi, setActiveLi] = useState("");

  return (
    <MaxWidthContainer className="w-[250px] text-center bg-[#1C1C24] min-h-full">
      <Image
        className="w-[100px] mt-[32.34px] m-auto h-[100px] rounded-full"
        src={avatar}
        alt="avatar"
      />
      <span className="w-full block text-[18px] text-center uppercase mt-[12px] font-[700] font-['Poppins'] text-white ">
        ceo of golf
      </span>
      <span className=" m-auto text-center text-[18px] flex gap-1 uppercase mt-[12px] justify-center font-[700] font-['Poppins'] text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          className="fill-[#0BAEFF]"
        >
          <path
            d="M25.392 14.9904C26.4993 8.16905 21.8671 1.7416 15.0457 0.634338C8.22433 -0.472929 1.79689 4.15928 0.689621 10.9807C-0.417645 17.802 4.21456 24.2295 11.0359 25.3367C17.8573 26.444 24.2848 21.8118 25.392 14.9904Z"
            fill="url(#paint0_linear_1_139)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_139"
              x1="13.042"
              y1="24.4521"
              x2="13.042"
              y2="-0.573607"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#875017" />
              <stop offset="0.08" stop-color="#895216" />
              <stop offset="0.13" stop-color="#905B16" />
              <stop offset="0.17" stop-color="#9D6915" />
              <stop offset="0.21" stop-color="#AF7D15" />
              <stop offset="0.24" stop-color="#C69814" />
              <stop offset="0.25" stop-color="#C99B14" />
              <stop offset="0.32" stop-color="#C99C15" />
              <stop offset="0.35" stop-color="#CCA01C" />
              <stop offset="0.37" stop-color="#D1A828" />
              <stop offset="0.39" stop-color="#D8B439" />
              <stop offset="0.4" stop-color="#E1C34F" />
              <stop offset="0.41" stop-color="#ECD56A" />
              <stop offset="0.42" stop-color="#FDF193" />
              <stop offset="0.48" stop-color="#F8E98A" />
              <stop offset="0.56" stop-color="#EBD673" />
              <stop offset="0.66" stop-color="#D6B64E" />
              <stop offset="0.78" stop-color="#B98B1B" />
              <stop offset="0.79" stop-color="#B78817" />
              <stop offset="1" stop-color="#C99B14" />
            </linearGradient>
          </defs>
        </svg>
        35
      </span>
      <ul className="w-full flex flex-col items-center gap-y-[35px] mt-[15.5px]">
        {LiList.map((item, i) => {
          return (
            <li
              onClick={() => setActiveLi(item.path)}
              key={i}
              className="w-full flex relative z-0 justify-center group "
            >
              {activeLi === item.path && (
                <div className="absolute w-[5px] z-10 h-full left-0 bg-[#0badff] rounded-tr-[100px] rounded-br-[100px]"></div>
              )}
              <Link
                className={` ${
                  activeLi === item.path ? "text-[#0BAEFF]" : "text-white"
                } w-full flex ml-[20px] text-[18px] font-[600] tracking-[.1px] font-['Poppins']  gap-x-[20px]  hover:text-[#0BAEFF] capitalize `}
                href={item.path}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={activeLi === item.path ? "#0BAEFF" : "#B5B5BE"}
                >
                  {item.svg}
                </svg>

                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </MaxWidthContainer>
  );
};

export default SideBar;