import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators';
import { pageData } from '@/services/api';
import { Navigation } from '@/types';

export const SET_SETTINGS = 'SET_SETTINGS';

type language = 'en' | 'uk' | 'ru';

export interface Settings {
  contact_us: {
    PHONE_NUMBER?: string,
    EMAIL?: string,
  };
  follow_us: {};
  navigation: Navigation[];
  language: language;
  pages: {};
}

@Module
export default class SettingsModule extends VuexModule {

  public settings: Settings = {
    contact_us: {},
    follow_us: {},
    navigation: [],
    language: window.location.pathname.split('/')[1] as language,
    pages: {
      main_page: {},
      about: {
        tabs: [],
      },
    },
  };

  @Mutation
  public [SET_SETTINGS](payload: any): void {
    // you need sure you not overwrite initial state!
    this.settings = {...this.settings, ...payload};
  }

  public get navigation(): Navigation[] {
    return this.settings.navigation;
  }

  public get phoneNumber(): string | number | undefined {
    return this.settings.contact_us.PHONE_NUMBER;
  }

  public get email(): string | undefined {
    return this.settings.contact_us.EMAIL;
  }

  public get followUs(): {} {
    return this.settings.follow_us;
  }

  public get language(): {} {
    return this.settings.language;
  }

  @Action({commit: SET_SETTINGS, rawError: true})
  public fetchData() {
    return pageData('data', this.settings.language);
  }
}
