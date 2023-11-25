<template>
  <div class="d-flex flex-column flex-grow-1 h-screen">
    <!-- Chrome設定 → 言語 → 優先言語を設定することで、ロケールによって言語設定を変更できる-->
    <div>{{ $t('data.login.hello') }}</div>
    <div>{{ $t('data.input.title') }}</div>
  </div>
</template>
