import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import nuxtPlugin from 'eslint-plugin-nuxt'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['node_modules', '.nuxt', '.output', 'dist', 'public', 'pnpm-lock.yaml']
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: 'module',
        ecmaVersion: 2020
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        
        // Custom composables (Nuxt auto-imports)
        useGameState: 'readonly',
        useGameControls: 'readonly',
        useGameLogic: 'readonly',
        
        // Vue 3 auto-imports
        ref: 'readonly',
        computed: 'readonly',
        reactive: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
        onBeforeMount: 'readonly',
        onMounted: 'readonly',
        onBeforeUpdate: 'readonly',
        onUpdated: 'readonly',
        onBeforeUnmount: 'readonly',
        onUnmounted: 'readonly',
        onActivated: 'readonly',
        onDeactivated: 'readonly',
        defineComponent: 'readonly',
        
        // Nuxt auto-imports
        useState: 'readonly',
        useAsyncData: 'readonly',
        useFetch: 'readonly',
        useRouter: 'readonly',
        useRoute: 'readonly',
        useHead: 'readonly',
        useError: 'readonly',
        definePageMeta: 'readonly',
        navigateTo: 'readonly',
        defineRouteRules: 'readonly',
        
        // Node globals
        global: 'readonly',
        Buffer: 'readonly',
        process: 'readonly'
      }
    },
    plugins: {
      vue: vuePlugin,
      nuxt: nuxtPlugin,
      '@typescript-eslint': tsPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...nuxtPlugin.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        KeyboardEvent: 'readonly',
        TouchEvent: 'readonly',
        
        // Custom composables (Nuxt auto-imports)
        useGameState: 'readonly',
        useGameControls: 'readonly',
        useGameLogic: 'readonly',
        
        // Nuxt auto-imports
        useState: 'readonly',
        useAsyncData: 'readonly',
        useFetch: 'readonly',
        useRouter: 'readonly',
        useRoute: 'readonly',
        useHead: 'readonly',
        useError: 'readonly',
        definePageMeta: 'readonly',
        navigateTo: 'readonly',
        defineRouteRules: 'readonly',
        
        // Node globals
        global: 'readonly',
        Buffer: 'readonly',
        process: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }
]
