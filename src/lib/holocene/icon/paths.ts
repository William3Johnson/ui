type Icon = {
  paths: svelte.JSX.SVGProps<SVGPathElement>[];
};

const archiveIcon: Icon = {
  paths: [
    {
      d: 'M12 5C15.8664 5 19 8.13359 19 12C19 15.8664 15.8664 19 12 19C9.70859 19 7.67613 17.9008 6.39973 16.2C6.25453 16.0059 6.29363 15.7324 6.48668 15.5875C6.68 15.4426 6.95426 15.4809 7.09945 15.675C8.21836 17.1625 9.9957 18.125 12 18.125C15.3824 18.125 18.125 15.3824 18.125 12C18.125 8.61758 15.3824 5.875 12 5.875C9.5582 5.875 7.44754 7.30508 6.46426 9.375H8.9375C9.17813 9.375 9.375 9.57187 9.375 9.8125C9.375 10.0531 9.17813 10.25 8.9375 10.25H5.4375C5.19589 10.25 5 10.0531 5 9.8125V6.3125C5 6.07078 5.19589 5.875 5.4375 5.875C5.67922 5.875 5.875 6.07078 5.875 6.3125V8.58477C7.06883 6.45715 9.36406 5 12 5ZM12 8.5C12.2406 8.5 12.4375 8.69687 12.4375 8.9375V11.8195L14.4965 13.8785C14.6687 14.048 14.6687 14.327 14.4965 14.4965C14.327 14.6687 14.048 14.6687 13.8785 14.4965L11.691 12.309C11.609 12.227 11.5379 12.1148 11.5379 12V8.9375C11.5379 8.69687 11.7594 8.5 11.9754 8.5H12Z',
      fill: '#111827',
    },
  ],
};

const arrowUpIcon: Icon = {
  paths: [
    {
      d: 'M15.3496 9.15234C15.2324 9.41602 14.9688 9.5918 14.7344 9.5918H12.3906V19.1719C12.3906 19.582 12.0684 19.875 11.6875 19.875C11.2773 19.875 10.9844 19.582 10.9844 19.1719V9.5918H8.61133C8.31836 9.5918 8.05469 9.41602 7.9668 9.15234C7.87891 8.88867 7.9082 8.5957 8.11328 8.39062L11.1602 5.10938C11.4238 4.81641 11.9219 4.81641 12.1855 5.10938L15.2324 8.39062C15.4375 8.5957 15.4668 8.88867 15.3496 9.15234Z',
      fill: '#111827',
    },
  ],
};

const arrowDownIcon: Icon = {
  paths: [
    {
      d: 'M7.99609 15.627C8.08398 15.3633 8.34766 15.1875 8.61133 15.1875H10.9551V5.57812C10.9551 5.19727 11.248 4.875 11.6289 4.875C11.9805 4.875 12.332 5.19727 12.332 5.57812V15.1875H14.6465C14.9102 15.1875 15.1738 15.3633 15.291 15.627C15.4082 15.8906 15.3496 16.1836 15.1445 16.3887L12.0977 19.6699C11.834 19.9629 11.3652 19.9629 11.0723 19.6699L8.02539 16.3887C7.9082 16.1836 7.87891 15.8906 7.99609 15.627Z',
      fill: '#111827',
    },
  ],
};

const calendarIcon: Icon = {
  paths: [
    {
      d: 'M7 12.25C7 11.5594 7.55969 11 8.25 11H15.75C16.4406 11 17 11.5594 17 12.25V14.75C17 15.4406 16.4406 16 15.75 16H8.25C7.55969 16 7 15.4406 7 14.75V12.25ZM8 12.25V14.75C8 14.8875 8.11187 15 8.25 15H15.75C15.8875 15 16 14.8875 16 14.75V12.25C16 12.1125 15.8875 12 15.75 12H8.25C8.11187 12 8 12.1125 8 12.25ZM9 6H15V4.5C15 4.22387 15.225 4 15.5 4C15.775 4 16 4.22387 16 4.5V6H17C18.1031 6 19 6.89531 19 8V18C19 19.1031 18.1031 20 17 20H7C5.89531 20 5 19.1031 5 18V8C5 6.89531 5.89531 6 7 6H8V4.5C8 4.22387 8.225 4 8.5 4C8.775 4 9 4.22387 9 4.5V6ZM6 18C6 18.5531 6.44781 19 7 19H17C17.5531 19 18 18.5531 18 18V10H6V18ZM6 8V9H18V8C18 7.44687 17.5531 7 17 7H7C6.44781 7 6 7.44687 6 8Z',
      fill: '#111827',
    },
  ],
};

const caretUpIcon: Icon = {
  paths: [
    {
      d: 'M6 15L12 9L18 15',
      stroke: '#111827',
      'stroke-width': '1.5',
    },
  ],
};

const caretDownIcon: Icon = {
  paths: [
    {
      d: 'M6 9L12 15L18 9',
      stroke: '#111827',
      'stroke-width': '1.5',
    },
  ],
};

const caretLeftIcon: Icon = {
  paths: [
    {
      d: 'M15 6L9 12L15 18',
      stroke: '#111827',
      'stroke-width': '1.5',
    },
  ],
};

const caretRightIcon: Icon = {
  paths: [
    {
      d: 'M9 6L15 12L9 18',
      stroke: '#111827',
      'stroke-width': '1.5',
    },
  ],
};

const checkMarkIcon: Icon = {
  paths: [
    {
      d: 'M5 13L9 17L19 7',
      stroke: '#111827',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '1.5',
    },
  ],
};

const clockIcon: Icon = {
  paths: [
    {
      d: 'M12 6V12H18',
      stroke: '#111827',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    {
      d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
      stroke: '#111827',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
  ],
};

const closeIcon: Icon = {
  paths: [
    {
      d: 'M11.0004 12.0005L16.243 17.2431M5.75781 17.2431L11.0004 12.0005L5.75781 17.2431ZM16.243 6.75781L11.0004 12.0005L16.243 6.75781ZM11.0004 12.0005L5.75781 6.75781L11.0004 12.0005Z',
      stroke: '#111827',
      'stroke-width': '1.5',
    },
  ],
};

const cometIcon: Icon = {
  paths: [
    {
      d: 'M18.984 5.56634C18.666 6.62591 18.0439 8.62337 17.3056 10.7015C17.497 10.7596 17.6715 10.8109 17.8151 10.8553C17.9415 10.8929 18.0441 10.9852 18.0921 11.1049C18.1433 11.2279 18.1365 11.3647 18.075 11.4808C17.4698 12.6361 15.8155 15.659 14.1785 17.3433C14.1511 17.3741 14.1238 17.4117 14.0964 17.4391C12.0183 19.5207 8.64407 19.5207 6.56321 17.4425C4.48153 15.3608 4.48153 11.9874 6.56321 9.9038C6.59056 9.87645 6.62815 9.84911 6.65892 9.82177C8.33908 8.18532 11.3578 6.53021 12.4953 5.92509C12.6115 5.86357 12.7483 5.85673 12.868 5.908C12.9911 5.95927 13.0834 6.06184 13.121 6.18499C13.1654 6.32513 13.2167 6.503 13.2748 6.69441C15.3496 5.95612 17.3462 5.33405 18.4045 5.0196C18.5617 4.97175 18.7293 5.01276 18.8455 5.12898C18.9867 5.24161 19.0031 5.41239 18.984 5.56634ZM13.7258 13.7252C13.7258 11.7939 12.1568 10.2252 10.2258 10.2252C8.29123 10.2252 6.7258 11.7942 6.7258 13.7252C6.7258 15.66 8.29123 17.2252 10.2258 17.2252C12.1809 17.2498 13.7258 15.6857 13.7258 13.7252ZM10.2258 12.8502C10.2258 13.3322 9.83287 13.7252 9.3508 13.7252C8.86545 13.7252 8.4758 13.332 8.4758 12.8502C8.4758 12.3684 8.86545 11.9752 9.3508 11.9752C9.58322 11.9752 9.80553 12.0675 9.96959 12.2315C10.1337 12.3956 10.2258 12.6424 10.2258 12.8502ZM11.1227 15.0377C11.1227 15.2804 10.9251 15.4752 10.686 15.4752C10.4433 15.4752 10.2485 15.2803 10.2485 15.0377C10.2485 14.795 10.4426 14.6002 10.6854 14.6002C10.9258 14.6002 11.1227 14.8189 11.1227 15.0377Z',
      fill: '#111827',
    },
  ],
};

const compactIcon = {
  paths: [
    {
      d: 'M10.3906 7.42309H19.2969C19.6778 7.42309 20 7.08654 20 6.61539C20 6.17789 19.6778 5.80769 19.2969 5.80769H10.3906C9.98047 5.80769 9.6875 6.17789 9.6875 6.61539C9.6875 7.08654 9.98047 7.42309 10.3906 7.42309ZM11.0938 10.3846H9.21875C8.95508 10.3846 8.75 10.6539 8.75 10.9231V11.1923H7.10937V8.23078H7.34375C7.57813 8.23078 7.8125 7.9952 7.8125 7.69232V5.53846C7.8125 5.26923 7.57813 5 7.34375 5H5.46875C5.20508 5 5 5.26923 5 5.53846V7.69232C5 7.9952 5.20508 8.23078 5.46875 8.23078H5.70313V16.3077C5.70313 17.351 6.43554 18.1924 7.34375 18.1924H8.75V18.4616C8.75 18.7644 8.95508 19 9.21875 19H11.0938C11.3281 19 11.5625 18.7644 11.5625 18.4616V16.3077C11.5625 16.0385 11.3281 15.7693 11.0938 15.7693H9.21875C8.95508 15.7693 8.75 16.0385 8.75 16.3077V16.5769H7.34375C7.19726 16.5769 7.10937 16.476 7.10937 16.3077V12.8077H8.75V13.077C8.75 13.3798 8.95508 13.6154 9.21875 13.6154H11.0938C11.3281 13.6154 11.5625 13.3798 11.5625 13.077V10.9231C11.5625 10.6539 11.3281 10.3846 11.0938 10.3846ZM19.2969 16.5769H14.1406C13.7305 16.5769 13.4375 16.9472 13.4375 17.3847C13.4375 17.8558 13.7305 18.1924 14.1406 18.1924H19.2969C19.6778 18.1924 20 17.8558 20 17.3847C20 16.9472 19.6778 16.5769 19.2969 16.5769ZM19.2969 11.1923H14.1406C13.7305 11.1923 13.4375 11.5625 13.4375 12C13.4375 12.4712 13.7305 12.8077 14.1406 12.8077H19.2969C19.6778 12.8077 20 12.4712 20 12C20 11.5625 19.6778 11.1923 19.2969 11.1923Z',
      stroke: '#111827',
      'stroke-width': '0.5',
    },
  ],
};

const copyIcon: Icon = {
  paths: [
    {
      d: 'M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z',
      stroke: '#111827',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    {
      d: 'M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9',
      stroke: '#111827',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
  ],
};

const downloadIcon: Icon = {
  paths: [
    {
      d: 'M6 20H18',
      stroke: '#111827',
      'stroke-width': '1.5',
    },
    {
      d: 'M12 16L8.5 12.5M12 4V16V4ZM12 16L15.5 12.5L12 16Z',
      stroke: '#111827',
      'stroke-width': '1.5',
    },
  ],
};

const feedIcon: Icon = {
  paths: [
    {
      d: 'M16.4837 17.1739H4.67718C4.29443 17.1739 4 17.5924 4 18.0869C4 18.6195 4.29443 19 4.67718 19H16.4837C16.8665 19 17.1904 18.6195 17.1904 18.0869C17.1904 17.5924 16.8665 17.1739 16.4837 17.1739ZM16.4837 5H4.67718C4.29443 5 4 5.41848 4 5.91304C4 6.36957 4.29443 6.82609 4.67718 6.82609H16.4837C16.8665 6.82609 17.1904 6.44564 17.1904 5.91304C17.1904 5.41848 16.8665 5 16.4837 5ZM18.3681 11.0869H6.56152C6.17877 11.0869 5.88434 11.5054 5.88434 12C5.88434 12.5326 6.17877 12.913 6.56152 12.913H18.3681C18.7509 12.913 19.0747 12.5326 19.0747 12C19.0747 11.5054 18.7509 11.0869 18.3681 11.0869Z',
      fill: '#111827',
    },
  ],
};

const feedbackIcon: Icon = {
  paths: [
    {
      d: 'M12 10.2227L12.484 9.73047C12.5277 9.68672 12.5496 9.6457 12.6207 9.60469C13.4273 8.91836 14.6332 8.95937 15.3934 9.73047C16.1973 10.5453 16.1973 11.8688 15.3934 12.659L12.9215 15.1937C12.6645 15.4535 12.3309 15.582 11.9973 15.5574C11.6637 15.5793 11.3328 15.4508 11.0785 15.1937L8.60664 12.659C7.80273 11.8688 7.80273 10.5453 8.60664 9.73047C9.3668 8.95937 10.5727 8.91836 11.3793 9.60469C11.4258 9.6457 11.4723 9.68672 11.516 9.73047L12 10.2227ZM12.298 14.5785L14.7699 12.0684C15.2375 11.5953 15.2375 10.8187 14.7699 10.3457C14.3105 9.87812 13.5695 9.87812 13.1074 10.3457L12 11.4695L10.8926 10.3457C10.4305 9.87812 9.68945 9.87812 9.23008 10.3457C8.7625 10.8187 8.7625 11.5953 9.23008 12.0684L11.702 14.5785C11.7867 14.666 11.8934 14.6824 11.9754 14.6824C12.1066 14.6824 12.2133 14.666 12.298 14.5785ZM19 12C19 15.8664 15.8664 19 12 19C8.13359 19 5 15.8664 5 12C5 8.13359 8.13359 5 12 5C15.8664 5 19 8.13359 19 12ZM12 5.875C8.61758 5.875 5.875 8.61758 5.875 12C5.875 15.3824 8.61758 18.125 12 18.125C15.3824 18.125 18.125 15.3824 18.125 12C18.125 8.61758 15.3824 5.875 12 5.875Z',
      fill: '#111827',
    },
  ],
};

const fileUploadIcon = {
  paths: [
    {
      d: 'M12.1285 16.066C11.9576 16.2369 11.9576 16.5139 12.1285 16.6845C12.2133 16.7688 12.3254 16.8125 12.4375 16.8125C12.5496 16.8125 12.6614 16.7698 12.7468 16.6843L15.3718 14.0593C15.5427 13.8884 15.5427 13.6114 15.3718 13.4408L12.7468 10.8158C12.5759 10.6449 12.2989 10.6449 12.1282 10.8158C11.9576 10.9867 11.9573 11.2637 12.1282 11.4343L14.007 13.3125H5.4375C5.19567 13.3125 5 13.5094 5 13.75C5 13.9906 5.19567 14.1875 5.4375 14.1875H14.007L12.1285 16.066ZM18.4887 8.42617L15.5766 5.51406C15.2457 5.18435 14.8027 5 14.3379 5H10.25C9.28477 5 8.5 5.7834 8.5 6.75V11.5625C8.5 11.8031 8.69687 12 8.9375 12C9.17813 12 9.375 11.8031 9.375 11.5625V6.75C9.375 6.26684 9.76684 5.875 10.25 5.875H13.75V8.9375C13.75 9.66211 14.3379 10.25 15.0625 10.25H18.125V17.25C18.125 17.7332 17.7332 18.125 17.25 18.125H10.25C9.76684 18.125 9.375 17.7332 9.375 17.25V15.9375C9.375 15.6969 9.17813 15.5 8.9375 15.5C8.69687 15.5 8.5 15.6969 8.5 15.9375V17.25C8.5 18.2166 9.28367 19 10.25 19H17.25C18.2166 19 19 18.2166 19 17.25V9.66211C19 9.19727 18.8168 8.7543 18.4887 8.42617ZM15.0625 9.375C14.8219 9.375 14.625 9.17813 14.625 8.9375V5.93188C14.7474 5.9747 14.862 6.03704 14.9564 6.13146L17.8685 9.04357C17.9637 9.13711 18.0266 9.25195 18.0676 9.375H15.0625Z',
      stroke: '#111827',
    },
  ],
};

const filterIcon = {
  paths: [
    {
      d: 'M3.99961 3H19.9997C20.552 3 20.9997 3.44764 20.9997 3.99987L20.9999 5.58569C21 5.85097 20.8946 6.10538 20.707 6.29295L14.2925 12.7071C14.105 12.8946 13.9996 13.149 13.9996 13.4142L13.9996 19.7192C13.9996 20.3698 13.3882 20.8472 12.7571 20.6894L10.7571 20.1894C10.3119 20.0781 9.99961 19.6781 9.99961 19.2192L9.99961 13.4142C9.99961 13.149 9.89425 12.8946 9.70672 12.7071L3.2925 6.29289C3.10496 6.10536 2.99961 5.851 2.99961 5.58579V4C2.99961 3.44772 3.44732 3 3.99961 3Z',
      stroke: '#111827',
    },
  ],
};

const jsonIcon = {
  paths: [
    {
      d: 'M13.5 6L10 18.5',
      stroke: '#111827',
      fill: 'none',
      'stroke-width': '1.5',
    },
    {
      d: 'M6.5 8.5L3 12L6.5 15.5',
      stroke: '#111827',
      fill: 'none',
      'stroke-width': '1.5',
    },
    {
      d: 'M17.5 8.5L21 12L17.5 15.5',
      stroke: '#111827',
      fill: 'none',
      'stroke-width': '1.5',
    },
  ],
};

const lockIcon: Icon = {
  paths: [
    {
      d: 'M16 12H8M16 12H17.4C17.7314 12 18 12.2686 18 12.6V19.4C18 19.7314 17.7314 20 17.4 20H6.6C6.26863 20 6 19.7314 6 19.4V12.6C6 12.2686 6.26863 12 6.6 12H8H16ZM16 12V8C16 6.66667 15.2 4 12 4C8.8 4 8 6.66667 8 8V12H16Z" stroke="#111827',
      stroke: '#111827',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
  ],
};

const logoutIcon: Icon = {
  paths: [
    {
      d: 'M18.373 11.8457L14.7168 8.18945C14.5645 8.03711 14.2852 8.03711 14.1328 8.18945C13.9805 8.3418 13.9805 8.62109 14.1328 8.77344L17.1035 11.7188H9.96875C9.74023 11.7188 9.5625 11.9219 9.5625 12.125C9.5625 12.3535 9.74023 12.5312 9.96875 12.5312H17.1035L14.1328 15.502C13.9805 15.6543 13.9805 15.9336 14.1328 16.0859C14.2852 16.2383 14.5645 16.2383 14.7168 16.0859L18.373 12.4297C18.4492 12.3535 18.5 12.252 18.5 12.125C18.5 12.0234 18.4492 11.9219 18.373 11.8457ZM9.96875 17H7.53125C6.8457 17 6.3125 16.4668 6.3125 15.7812V8.46875C6.3125 7.80859 6.8457 7.25 7.53125 7.25H9.96875C10.1719 7.25 10.375 7.07227 10.375 6.84375C10.375 6.64062 10.1719 6.4375 9.96875 6.4375H7.53125C6.38867 6.4375 5.5 7.35156 5.5 8.46875V15.7812C5.5 16.9238 6.38867 17.8125 7.53125 17.8125H9.96875C10.1719 17.8125 10.375 17.6348 10.375 17.4062C10.375 17.2031 10.1719 17 9.96875 17Z',
      fill: '#111827',
    },
  ],
};

const namespaceIcon: Icon = {
  paths: [
    {
      d: 'M15.3571 8.42857C16.7388 8.42857 17.8571 9.54688 17.8571 10.9286C17.8571 11.1674 17.8237 11.3772 17.7612 11.6161C18.6674 12.0938 19.2857 13.0469 19.2857 14.1429C19.2857 15.721 18.0067 17 16.4286 17H8.21429C6.43906 17 5 15.5603 5 13.7857C5 12.3839 5.89621 11.1942 7.14665 10.7522C7.23884 8.66518 8.95982 7 11.0714 7C12.3996 7 13.5737 7.6596 14.2857 8.66964C14.6094 8.51496 14.9732 8.42857 15.3571 8.42857ZM14.5915 9.31473C14.279 9.46429 13.9018 9.36384 13.7009 9.08036C13.1183 8.25268 12.1585 7.71429 11.0714 7.71429C9.34375 7.71429 7.93527 9.07589 7.85937 10.7835C7.84821 11.0759 7.65848 11.3103 7.38393 11.4263C6.41027 11.7701 5.71429 12.6964 5.71429 13.7857C5.71429 15.1674 6.83348 16.2857 8.21429 16.2857H16.4286C17.6116 16.2857 18.5714 15.3259 18.5714 14.1429C18.5714 13.3214 18.1094 12.6071 17.4286 12.2478C17.1295 12.0692 16.9821 11.7433 17.0737 11.3996C17.1183 11.2634 17.1429 11.1004 17.1429 10.9286C17.1429 9.94196 16.3437 9.14286 15.3571 9.14286C15.0826 9.14286 14.8237 9.20536 14.5915 9.31473Z',
      fill: '#111827',
    },
  ],
};

const namespaceSelectIcon: Icon = {
  paths: [
    {
      d: 'M15.3571 8.42857C16.7388 8.42857 17.8571 9.54688 17.8571 10.9286C17.8571 11.1674 17.8237 11.3772 17.7612 11.6161C18.6674 12.0938 19.2857 13.0469 19.2857 14.1429C19.2857 15.721 18.0067 17 16.4286 17H8.21429C6.43906 17 5 15.5603 5 13.7857C5 12.3839 5.89621 11.1942 7.14665 10.7522C7.23884 8.66518 8.95982 7 11.0714 7C12.3996 7 13.5737 7.6596 14.2857 8.66964C14.6094 8.51496 14.9732 8.42857 15.3571 8.42857ZM14.5915 9.31473C14.279 9.46429 13.9018 9.36384 13.7009 9.08036C13.1183 8.25268 12.1585 7.71429 11.0714 7.71429C9.34375 7.71429 7.93527 9.07589 7.85938 10.7835C7.84821 11.0759 7.65848 11.3103 7.38393 11.4263C6.41027 11.7701 5.71429 12.6964 5.71429 13.7857C5.71429 15.1674 6.83348 16.2857 8.21429 16.2857H16.4286C17.6116 16.2857 18.5714 15.3259 18.5714 14.1429C18.5714 13.3214 18.1094 12.6071 17.4286 12.2478C17.1295 12.0692 16.9821 11.7433 17.0737 11.3996C17.1183 11.2634 17.1429 11.1004 17.1429 10.9286C17.1429 9.94196 16.3437 9.14286 15.3571 9.14286C15.0826 9.14286 14.8237 9.20536 14.5915 9.31473Z',
      fill: '#111827',
    },
    {
      d: 'M10.7593 11.8001H13.2407C13.4713 11.8001 13.5865 11.521 13.4239 11.3584L12.1836 10.076C12.133 10.0253 12.0668 10 12.0006 10C11.9344 10 11.8685 10.0253 11.8182 10.076L10.5761 11.3586C10.4135 11.5208 10.5286 11.8001 10.7593 11.8001ZM13.2401 12.4001H10.7593C10.5287 12.4001 10.4135 12.6792 10.5761 12.8418L11.8182 14.1243C11.8677 14.1747 11.9259 14.2 11.9999 14.2C12.066 14.2 12.1323 14.1747 12.183 14.124L13.4232 12.8416C13.5861 12.6795 13.4708 12.4001 13.2401 12.4001Z',
      fill: '#111827',
    },
  ],
};

const navCollapseIcon: Icon = {
  paths: [
    {
      d: 'M18.5 11.5H9.20625L12.8531 7.85313C13.0484 7.65781 13.0484 7.34125 12.8531 7.14625C12.6578 6.95125 12.3412 6.95094 12.1462 7.14625L7.64625 11.6462C7.54875 11.7437 7.5 11.8719 7.5 12C7.5 12.1281 7.54881 12.2559 7.6465 12.3534L12.1465 16.8534C12.3418 17.0487 12.6584 17.0487 12.8534 16.8534C13.0484 16.6581 13.0487 16.3416 12.8534 16.1466L9.20625 12.5H18.5C18.775 12.5 19 12.275 19 12C19 11.725 18.775 11.5 18.5 11.5ZM5.5 6C5.22363 6 5 6.22375 5 6.5V17.5C5 17.775 5.22363 18 5.5 18C5.77637 18 6 17.775 6 17.5V6.5C6 6.22375 5.77625 6 5.5 6Z',
      fill: '#111827',
    },
  ],
};

const navExpandIcon: Icon = {
  paths: [
    {
      d: 'M5.5 11.5H14.7937L11.1469 7.85313C10.9516 7.65781 10.9516 7.34125 11.1469 7.14625C11.3422 6.95125 11.6588 6.95094 11.8538 7.14625L16.3537 11.6462C16.4513 11.7437 16.5 11.8719 16.5 12C16.5 12.1281 16.4512 12.2559 16.3535 12.3534L11.8535 16.8534C11.6582 17.0487 11.3416 17.0487 11.1466 16.8534C10.9516 16.6581 10.9513 16.3416 11.1466 16.1466L14.7937 12.5H5.5C5.225 12.5 5 12.275 5 12C5 11.725 5.225 11.5 5.5 11.5ZM18.5 6C18.7764 6 19 6.22375 19 6.5V17.5C19 17.775 18.7764 18 18.5 18C18.2236 18 18 17.775 18 17.5V6.5C18 6.22375 18.2237 6 18.5 6Z',
      fill: '#111827',
    },
  ],
};

const refreshIcon: Icon = {
  paths: [
    {
      d: 'M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8',
      stroke: '#111827',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    {
      d: 'M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3',
      stroke: '#111827',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
  ],
};

const searchIcon: Icon = {
  paths: [
    {
      d: 'M15.5 15.5L19 19',
      stroke: '#111827',
      'stroke-width': '1.5',
    },
    {
      d: 'M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z',
      stroke: '#111827',
      'stroke-width': '1.5',
    },
  ],
};

const settingsIcon: Icon = {
  paths: [
    {
      d: 'M9.59383 11.9754C9.59383 10.6711 10.6712 9.56914 12.0001 9.56914C13.329 9.56914 14.4063 10.6711 14.4063 11.9754C14.4063 13.3289 13.329 14.4062 12.0001 14.4062C10.6712 14.4062 9.59383 13.3289 9.59383 11.9754ZM12.0001 10.4441C11.1552 10.4441 10.4688 11.1551 10.4688 11.9754C10.4688 12.8449 11.1552 13.5066 12.0001 13.5066C12.845 13.5066 13.5313 12.8449 13.5313 11.9754C13.5313 11.1551 12.845 10.4441 12.0001 10.4441ZM6.79574 11.3055L5.69297 10.2992C5.38891 10.023 5.31891 9.57187 5.52453 9.21641L6.35141 7.78359C6.55703 7.42758 6.98277 7.2627 7.37461 7.38766L8.79539 7.84102C9.1618 7.55828 9.56649 7.32313 9.99852 7.14457L10.3184 5.68797C10.4059 5.28629 10.7614 5 11.1743 5H12.8259C13.2388 5 13.5942 5.28629 13.6817 5.68797L14.0016 7.14457C14.4091 7.32313 14.8384 7.55828 15.2048 7.84102L16.6266 7.38766C17.0177 7.2627 17.4442 7.42758 17.6493 7.78359L18.4751 9.21641C18.6802 9.57187 18.6118 10.023 18.3083 10.2992L17.2036 11.3055C17.2337 11.5324 17.2501 11.7648 17.2501 11.9754C17.2501 12.2352 17.2337 12.4676 17.2036 12.6945L18.3083 13.7008C18.6118 13.977 18.6802 14.4281 18.4751 14.7836L17.6493 16.2164C17.4442 16.5719 17.0177 16.7359 16.6266 16.6129L15.2048 16.159C14.8384 16.4406 14.4091 16.6758 14.0016 16.8563L13.6817 18.3109C13.5942 18.7129 13.2388 19 12.8259 19H11.1743C10.7614 19 10.4059 18.7129 10.3184 18.3109L9.99852 16.8563C9.56649 16.6758 9.1618 16.4406 8.79539 16.159L7.37461 16.6129C6.98277 16.7359 6.55703 16.5719 6.35141 16.2164L5.52453 14.7836C5.31891 14.4281 5.38891 13.977 5.69297 13.7008L6.79574 12.6945C6.76566 12.4676 6.75008 12.2352 6.75008 11.9754C6.75008 11.7648 6.76566 11.5324 6.79574 11.3055ZM9.33133 8.53281L8.96766 8.81445L7.1091 8.22109L6.28223 9.65391L7.72297 10.9664L7.66309 11.4203C7.63793 11.609 7.62508 11.8031 7.62508 11.9754C7.62508 12.1969 7.63793 12.391 7.66309 12.5797L7.72297 13.0336L6.28223 14.3461L7.1091 15.7789L8.96766 15.1855L9.33133 15.4672C9.63484 15.7023 9.97391 15.8992 10.3321 16.0223L10.7559 16.2219L11.1743 18.125H12.8259L13.2442 16.2219L13.6434 16.0223C14.0263 15.8992 14.3653 15.7023 14.6688 15.4672L15.0325 15.1855L16.8919 15.7789L17.7177 14.3461L16.2766 13.0336L16.3368 12.5797C16.3614 12.391 16.3751 12.1969 16.3751 12C16.3751 11.8031 16.3614 11.609 16.3368 11.4203L16.2766 10.9664L17.7177 9.65391L16.8919 8.22109L15.0325 8.81445L14.6688 8.53281C14.3653 8.29766 14.0263 8.10078 13.6434 7.95312L13.2442 7.77812L12.8259 5.875H11.1743L10.7559 7.77812L10.3321 7.95312C9.97391 8.10078 9.63484 8.29766 9.33133 8.53281Z',
      fill: '#111827',
    },
  ],
};

const spinnerIcon: Icon = {
  paths: [
    {
      d: 'M6.79688 5.95703C6.19922 5.95703 5.67188 6.48438 5.67188 7.08203C5.67188 7.71484 6.19922 8.20703 6.79688 8.20703C7.42969 8.20703 7.92188 7.71484 7.92188 7.08203C7.92188 6.48438 7.42969 5.95703 6.79688 5.95703ZM6.79688 16.3281C6.19922 16.3281 5.67188 16.8203 5.67188 17.4531C5.67188 18.0508 6.19922 18.5781 6.79688 18.5781C7.42969 18.5781 7.92188 18.0508 7.92188 17.4531C7.92188 16.8203 7.42969 16.3281 6.79688 16.3281ZM12 18.4375C11.3672 18.4375 10.875 18.9648 10.875 19.5625C10.875 20.1953 11.3672 20.6875 12 20.6875C12.5977 20.6875 13.125 20.1953 13.125 19.5625C13.125 18.9648 12.5977 18.4375 12 18.4375ZM4.6875 11.125C4.05469 11.125 3.5625 11.6523 3.5625 12.25C3.5625 12.8828 4.05469 13.375 4.6875 13.375C5.28516 13.375 5.8125 12.8828 5.8125 12.25C5.8125 11.6523 5.28516 11.125 4.6875 11.125ZM12 3.8125C11.3672 3.8125 10.875 4.33984 10.875 4.9375C10.875 5.57031 11.3672 6.0625 12 6.0625C12.5977 6.0625 13.125 5.57031 13.125 4.9375C13.125 4.33984 12.5977 3.8125 12 3.8125ZM19.3125 11.125C18.6797 11.125 18.1875 11.6523 18.1875 12.25C18.1875 12.8828 18.6797 13.375 19.3125 13.375C19.9102 13.375 20.4375 12.8828 20.4375 12.25C20.4375 11.6523 19.9102 11.125 19.3125 11.125ZM17.168 16.3281C16.5352 16.3281 16.043 16.8203 16.043 17.4531C16.043 18.0508 16.5352 18.5781 17.168 18.5781C17.7656 18.5781 18.293 18.0508 18.293 17.4531C18.293 16.8203 17.7656 16.3281 17.168 16.3281Z',
      fill: '#111827',
    },
  ],
};

const workflowIcon: Icon = {
  paths: [
    {
      d: 'M5 14.3043L7.93473 9.60875C7.98372 9.53037 8.09876 9.53302 8.14407 9.61359L10.6702 14.1044C10.718 14.1895 10.8415 14.1865 10.8852 14.0992L13.1203 9.6289C13.1628 9.54387 13.2821 9.53821 13.3324 9.61883L16.1555 14.1358C16.2037 14.2129 16.3164 14.2118 16.3631 14.1339L19 9.7391',
      stroke: '#111827',
      'stroke-width': '0.811594',
    },
  ],
};

export type IconName = keyof typeof icons;

export const icons: { [index: string]: Icon } = {
  archive: archiveIcon,
  arrowDown: arrowDownIcon,
  arrowUp: arrowUpIcon,
  calendar: calendarIcon,
  caretDown: caretDownIcon,
  caretLeft: caretLeftIcon,
  caretRight: caretRightIcon,
  caretUp: caretUpIcon,
  checkMark: checkMarkIcon,
  clock: clockIcon,
  close: closeIcon,
  copy: copyIcon,
  comet: cometIcon,
  compact: compactIcon,
  download: downloadIcon,
  feed: feedIcon,
  feedback: feedbackIcon,
  fileUpload: fileUploadIcon,
  filter: filterIcon,
  json: jsonIcon,
  lock: lockIcon,
  logout: logoutIcon,
  namespace: namespaceIcon,
  namespaceSelect: namespaceSelectIcon,
  navCollapse: navCollapseIcon,
  navExpand: navExpandIcon,
  refresh: refreshIcon,
  search: searchIcon,
  settings: settingsIcon,
  spinner: spinnerIcon,
  workflow: workflowIcon,
};
