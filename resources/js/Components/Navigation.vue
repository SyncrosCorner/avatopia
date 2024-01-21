<script setup>
import {onMounted, onUnmounted, ref} from 'vue';
import imgLogo from '@/../images/logo.png';

const userNavigation = ref(null);
const userDropdown = ref(null);
const userDropdownOpen = ref(false);

const mobileNavOpen = ref(false);

function documentClick(e) {
    if (!userNavigation.value.contains(e.target) || e.target.classList.contains('navigation__user-dropdown__link')) {
        // click off - close dropdown
        userDropdown.value.style.height = 0;
        userDropdownOpen.value = false;
    }
}

function toggleUserDropdown() {
    if (userDropdownOpen.value) {
        userDropdown.value.style.height = 0;

        userDropdownOpen.value = false;
    } else {
        const dropdownHeight = userDropdown.value.scrollHeight;
        userDropdown.value.style.height = `${dropdownHeight}px`;

        userDropdownOpen.value = true;
    }
}

function toggleMobileNav() {
    mobileNavOpen.value = !mobileNavOpen.value;
}

onMounted(() => {
    document.addEventListener('click', documentClick);
});

onUnmounted(() => {
    document.removeEventListener('click', documentClick);
});
</script>

<template>
    <header
        :class="[
            'navigation',
            mobileNavOpen ? 'navigation--mobile-open' : '',
        ]"
    >
        <div class="container">
            <div class="navigation__inner">
                <Link href="#" class="navigation__logo-link">
                    <img :src="imgLogo" class="navigation__logo-image" />
                </Link>

                <div class="navigation__main">
                    <div class="navigation__links">
                        <Link href="#" class="navigation__link">Link 1</Link>
                        <Link href="#" class="navigation__link">Link 2</Link>
                        <Link href="#" class="navigation__link">Link 3</Link>
                        <Link href="#" class="navigation__link">Link 4</Link>
                    </div>

                    <div class="navigation__user" ref="userNavigation">
                        <button
                            type="button"
                            class="btn navigation__user-bubble"
                            @click="toggleUserDropdown"
                        >
                            <img src="https://via.placeholder.com/96x96" class="navigation__user-image" />
                        </button>

                        <div
                            ref="userDropdown"
                            :class="[
                                'navigation__user-dropdown',
                                userDropdownOpen ? 'navigation__user-dropdown--open' : '',
                            ]"
                        >
                            <div class="navigation__user-dropdown__inner">
                                <span class="navigation__user-dropdown__greeting">Hi, Person!</span>

                                <Link href="#" class="navigation__user-dropdown__link">Link 1</Link>
                                <Link href="#" class="navigation__user-dropdown__link">Link 2</Link>
                                <Link href="#" class="navigation__user-dropdown__link">Link 3</Link>
                                <Link href="#" class="navigation__user-dropdown__link">Link 4</Link>

                                <hr />

                                <Link href="#" class="navigation__user-dropdown__link">Logout</Link>
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn navigation__burger" @click="toggleMobileNav">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
