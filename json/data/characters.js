import { itemList } from './itemList';
import albedo from './characterData/albedo.json'
import aloy from './characterData/aloy.json'
import amber from './characterData/amber.json'
import arataki_itto from './characterData/arataki_itto.json'
import barbara from './characterData/barbara.json'
import beidou from './characterData/beidou.json'
import bennett from './characterData/bennett.json'
import candace from './characterData/candace.json'
import chongyun from './characterData/chongyun.json'
import collei from './characterData/collei.json'
import cyno from './characterData/cyno.json'
import diluc from './characterData/diluc.json'
import diona from './characterData/diona.json'
import dori from './characterData/dori.json'
import eula from './characterData/eula.json'
import faruzan from './characterData/faruzan.json'
import fischl from './characterData/fischl.json'
import ganyu from './characterData/ganyu.json'
import gorou from './characterData/gorou.json'
import hu_tao from './characterData/hu_tao.json'
import jean from './characterData/jean.json'
import kaedehara_kazuha from './characterData/kaedehara_kazuha.json'
import kaeya from './characterData/kaeya.json'
import kamisato_ayaka from './characterData/kamisato_ayaka.json'
import kamisato_ayato from './characterData/kamisato_ayato.json'
import keqing from './characterData/keqing.json'
import klee from './characterData/klee.json'
import kujou_sara from './characterData/kujou_sara.json'
import kuki_shinobu from './characterData/kuki_shinobu.json'
import layla from './characterData/layla.json'
import lisa from './characterData/lisa.json'
import mona from './characterData/mona.json'
import nahida from './characterData/nahida.json'
import nilou from './characterData/nilou.json'
import ningguang from './characterData/ningguang.json'
import noelle from './characterData/noelle.json'
import qiqi from './characterData/qiqi.json'
import raiden_shogun from './characterData/raiden_shogun.json'
import razor from './characterData/razor.json'
import rosaria from './characterData/rosaria.json'
import sangonomiya_kokomi from './characterData/sangonomiya_kokomi.json'
import sayu from './characterData/sayu.json'
import shenhe from './characterData/shenhe.json'
import shikanoin_heizou from './characterData/shikanoin_heizou.json'
import sucrose from './characterData/sucrose.json'
import tartaglia from './characterData/tartaglia.json'
import thoma from './characterData/thoma.json'
import tighnari from './characterData/tighnari.json'
import traveler_anemo from './characterData/traveler_anemo.json'
import traveler_dendro from './characterData/traveler_dendro.json'
import traveler_electro from './characterData/traveler_electro.json'
import traveler_geo from './characterData/traveler_geo.json'
import venti from './characterData/venti.json'
import wanderer from './characterData/wanderer.json'
import xiangling from './characterData/xiangling.json'
import xiao from './characterData/xiao.json'
import xingqiu from './characterData/xingqiu.json'
import xinyan from './characterData/xinyan.json'
import yae_miko from './characterData/yae_miko.json'
import yanfei from './characterData/yanfei.json'
import yelan from './characterData/yelan.json'
import yoimiya from './characterData/yoimiya.json'
import yun_jin from './characterData/yun_jin.json'
import zhongli from './characterData/zhongli.json'
import { elements } from './elements';
import { weapons } from './weapons';
import { regions } from './regions';

export const characters = {
  albedo: {
    id: 'albedo',
    name: 'Albedo',
    rarity: 5,
    region:regions.mondstadt,
    weapon: weapons.sword,
    description: albedo.description,
    constellations: albedo.constellations,
    passive: albedo.passives,
    skill: albedo.elementalSkill,
    burst:albedo.burst,
    stats: {
      hp: 13226,
      atk: 251,
      def: 876,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.cecilia,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 2,
          },
          {
            item: itemList.cecilia,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 4,
          },
          {
            item: itemList.cecilia,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 8,
          },
          {
            item: itemList.cecilia,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 12,
          },
          {
            item: itemList.cecilia,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 20,
          },
          {
            item: itemList.cecilia,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.tusk_of_monoceros_caeli,
    },
    element: elements.geo,
  },
  aloy: {
    id: 'aloy',
    name: 'Aloy',
    rarity: 5,
    region:regions.collab,
    weapon: weapons.bow,
    description: aloy.description,
    constellations: aloy.constellations,
    passive: aloy.passives,
    skill: aloy.elementalSkill,
    burst:aloy.burst,
    stats: {
      hp: 10899,
      atk: 234,
      def: 676,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.crystal_marrow,
            amount: 3,
          },
          {
            item: itemList.spectral_husk,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 2,
          },
          {
            item: itemList.crystal_marrow,
            amount: 10,
          },
          {
            item: itemList.spectral_husk,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 4,
          },
          {
            item: itemList.crystal_marrow,
            amount: 20,
          },
          {
            item: itemList.spectral_heart,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 8,
          },
          {
            item: itemList.crystal_marrow,
            amount: 30,
          },
          {
            item: itemList.spectral_heart,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 12,
          },
          {
            item: itemList.crystal_marrow,
            amount: 45,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 20,
          },
          {
            item: itemList.crystal_marrow,
            amount: 60,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.molten_moment,
    },
    element: elements.cryo,
  },
  amber: {
    id: 'amber',
    name: 'Amber',
    rarity: 4,
    region:regions.mondstadt,
    weapon: weapons.bow,
    description: amber.description,
    constellations: amber.constellations,
    passive: amber.passives,
    skill: amber.elementalSkill,
    burst:amber.burst,
    stats: {
      hp: 9461,
      atk: 223,
      def: 601,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 3,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 10,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 20,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 30,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 45,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 60,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.firm_arrowhead, itemList.sharp_arrowhead, itemList.weathered_arrowhead],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.dvalins_sigh,
    },
    element: elements.pyro,
  },
  arataki_itto: {
    id: 'arataki_itto',
    name: 'Arataki Itto',
    rarity: 5,
    region:regions.inazuma,
    weapon: weapons.claymore,
    description: arataki_itto.description,
    constellations: arataki_itto.constellations,
    passive: arataki_itto.passives,
    skill: arataki_itto.elementalSkill,
    burst:arataki_itto.burst,
    stats: {
      hp: 12858,
      atk: 227,
      def: 959,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.onikabuto,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 2,
          },
          {
            item: itemList.onikabuto,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 4,
          },
          {
            item: itemList.onikabuto,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 8,
          },
          {
            item: itemList.onikabuto,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 12,
          },
          {
            item: itemList.onikabuto,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 20,
          },
          {
            item: itemList.onikabuto,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      boss: itemList.ashen_heart,
    },
    element: elements.geo,
  },
  barbara: {
    id: 'barbara',
    name: 'Barbara',
    rarity: 4,
    region:regions.mondstadt,
    weapon: weapons.catalyst,
    description: barbara.description,
    constellations: barbara.constellations,
    passive: barbara.passives,
    skill: barbara.elementalSkill,
    burst:barbara.burst,
    stats: {
      hp: 9787,
      atk: 159,
      def: 669,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 2,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 4,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 8,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 12,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 20,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.ring_of_boreas,
    },
    element: elements.hydro,
  },
  beidou: {
    id: 'beidou',
    name: 'Beidou',
    rarity: 4,
    region:regions.liyue,
    weapon: weapons.claymore,
    description: beidou.description,
    constellations: beidou.constellations,
    passive: beidou.passives,
    skill: beidou.elementalSkill,
    burst:beidou.burst,
    stats: {
      hp: 13050,
      atk: 225,
      def: 648,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 2,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 4,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 8,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 12,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 20,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.dvalins_sigh,
    },
    element: elements.electro,
  },
  bennett: {
    id: 'bennett',
    name: 'Bennett',
    rarity: 4,
    region:regions.mondstadt,
    weapon: weapons.sword,
    description: bennett.description,
    constellations: bennett.constellations,
    passive: bennett.passives,
    skill: bennett.elementalSkill,
    burst:bennett.burst,
    stats: {
      hp: 12397,
      atk: 191,
      def: 771,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.windwheel_aster,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.windwheel_aster,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.windwheel_aster,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.windwheel_aster,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.windwheel_aster,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dvalins_plume,
    },
    element: elements.pyro,
  },
  candace: {
    id: 'candace',
    name: 'Candace',
    rarity: 4,
    region:regions.sumeru,
    weapon: weapons.polearm,
    description: candace.description,
    constellations: candace.constellations,
    passive: candace.passives,
    skill: candace.elementalSkill,
    burst:candace.burst,
    stats: {
      hp: 10875,
      atk: 212,
      def: 683,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.henna_berry,
            amount: 3,
          },
          {
            item: itemList.faded_red_satin,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 2,
          },
          {
            item: itemList.henna_berry,
            amount: 10,
          },
          {
            item: itemList.faded_red_satin,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 4,
          },
          {
            item: itemList.henna_berry,
            amount: 20,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 8,
          },
          {
            item: itemList.henna_berry,
            amount: 30,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 12,
          },
          {
            item: itemList.henna_berry,
            amount: 45,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 20,
          },
          {
            item: itemList.henna_berry,
            amount: 60,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.faded_red_satin, itemList.trimmed_red_silk, itemList.rich_red_brocade],
      book: [itemList.teachings_of_admonition, itemList.guide_to_admonition, itemList.philosophies_of_admonition],
      boss: itemList.tears_of_the_calamitous_god,
    },
    element: elements.hydro,
  },
  chongyun: {
    id: 'chongyun',
    name: 'Chongyun',
    rarity: 4,
    region:regions.liyue,
    weapon: weapons.claymore,
    description: chongyun.description,
    constellations: chongyun.constellations,
    passive: chongyun.passives,
    skill: chongyun.elementalSkill,
    burst:chongyun.burst,
    stats: {
      hp: 10984,
      atk: 223,
      def: 648,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.cor_lapis,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.cor_lapis,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.cor_lapis,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.cor_lapis,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.cor_lapis,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.cor_lapis,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.dvalins_sigh,
    },
    element: elements.cryo,
  },
  collei: {
    id: 'collei',
    name: 'Collei',
    rarity: 4,
    region:regions.sumeru,
    weapon: weapons.bow,
    description: collei.description,
    constellations: collei.constellations,
    passive: collei.passives,
    skill: collei.elementalSkill,
    burst:collei.burst,
    stats: {
      hp: 9787,
      atk: 200,
      def: 601,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 3,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 2,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 10,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 4,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 20,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 8,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 30,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 12,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 45,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 20,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 60,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.firm_arrowhead, itemList.sharp_arrowhead, itemList.weathered_arrowhead],
      book: [itemList.teachings_of_praxis, itemList.guide_to_praxis, itemList.philosophies_of_praxis],
      boss: itemList.tears_of_the_calamitous_god,
    },
    element: elements.dendro,
  },
  cyno: {
    id: 'cyno',
    name: 'Cyno',
    rarity: 5,
    region:regions.sumeru,
    weapon: weapons.polearm,
    description: cyno.description,
    constellations: cyno.constellations,
    passive: cyno.passives,
    skill: cyno.elementalSkill,
    burst:cyno.burst,
    stats: {
      hp: 12491,
      atk: 318,
      def: 859,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.scarab,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 2,
          },
          {
            item: itemList.scarab,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 4,
          },
          {
            item: itemList.scarab,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 8,
          },
          {
            item: itemList.scarab,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 12,
          },
          {
            item: itemList.scarab,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 20,
          },
          {
            item: itemList.scarab,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_admonition, itemList.guide_to_admonition, itemList.philosophies_of_admonition],
      boss: itemList.mudra_of_the_malefic_general,
    },
    element: elements.electro,
  },
  diluc: {
    id: 'diluc',
    name: 'Diluc',
    rarity: 5,
    region:regions.mondstadt,
    weapon: weapons.claymore,
    description: diluc.description,
    constellations: diluc.constellations,
    passive: diluc.passives,
    skill: diluc.elementalSkill,
    burst:diluc.burst,
    stats: {
      hp: 12981,
      atk: 335,
      def: 784,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dvalins_plume,
    },
    element: elements.pyro,
  },
  diona: {
    id: 'diona',
    name: 'Diona',
    rarity: 4,
    region:regions.mondstadt,
    weapon: weapons.bow,
    description: diona.description,
    constellations: diona.constellations,
    passive: diona.passives,
    skill: diona.elementalSkill,
    burst:diona.burst,
    stats: {
      hp: 9570,
      atk: 212,
      def: 601,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.calla_lily,
            amount: 3,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.calla_lily,
            amount: 10,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.calla_lily,
            amount: 20,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.calla_lily,
            amount: 30,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.calla_lily,
            amount: 45,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.calla_lily,
            amount: 60,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.firm_arrowhead, itemList.sharp_arrowhead, itemList.weathered_arrowhead],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.shard_of_a_foul_legacy,
    },
    element: elements.cryo,
  },
  dori: {
    id: 'dori',
    name: 'Dori',
    rarity: 4,
    region:regions.sumeru,
    weapon: weapons.claymore,
    description: dori.description,
    constellations: dori.constellations,
    passive: dori.passives,
    skill: dori.elementalSkill,
    burst:dori.burst,
    stats: {
      hp: 12397,
      atk: 223,
      def: 723,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 3,
          },
          {
            item: itemList.faded_red_satin,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 2,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 10,
          },
          {
            item: itemList.faded_red_satin,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 4,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 20,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 8,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 30,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 12,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 45,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.thunderclap_fruitcore,
            amount: 20,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 60,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.faded_red_satin, itemList.trimmed_red_silk, itemList.rich_red_brocade],
      book: [itemList.teachings_of_ingenuity, itemList.guide_to_ingenuity, itemList.philosophies_of_ingenuity],
      boss: itemList.bloodjade_branch,
    },
    element: elements.electro,
  },
  eula: {
    id: 'eula',
    name: 'Eula',
    rarity: 5,
    region:regions.mondstadt,
    weapon: weapons.claymore,
    description: eula.description,
    constellations: eula.constellations,
    passive: eula.passives,
    skill: eula.elementalSkill,
    burst:eula.burst,
    stats: {
      hp: 13226,
      atk: 342,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.dandelion_seed,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 2,
          },
          {
            item: itemList.dandelion_seed,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 4,
          },
          {
            item: itemList.dandelion_seed,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 8,
          },
          {
            item: itemList.dandelion_seed,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 12,
          },
          {
            item: itemList.dandelion_seed,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.crystalline_bloom,
            amount: 20,
          },
          {
            item: itemList.dandelion_seed,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dragon_lords_crown,
    },
    element: elements.cryo,
  },
  faruzan: {
    id: 'faruzan',
    name: 'Faruzan',
    rarity: 4,
    region:regions.sumeru,
    weapon: weapons.bow,
    description: faruzan.description,
    constellations: faruzan.constellations,
    passive: faruzan.passives,
    skill: faruzan.elementalSkill,
    burst:faruzan.burst,
    stats: {
      hp: 9570,
      atk: 196,
      def: 628,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.henna_berry,
            amount: 3,
          },
          {
            item: itemList.faded_red_satin,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 2,
          },
          {
            item: itemList.henna_berry,
            amount: 10,
          },
          {
            item: itemList.faded_red_satin,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 4,
          },
          {
            item: itemList.henna_berry,
            amount: 20,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 8,
          },
          {
            item: itemList.henna_berry,
            amount: 30,
          },
          {
            item: itemList.trimmed_red_silk,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 12,
          },
          {
            item: itemList.henna_berry,
            amount: 45,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.light_guiding_tetrahedron,
            amount: 20,
          },
          {
            item: itemList.henna_berry,
            amount: 60,
          },
          {
            item: itemList.rich_red_brocade,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.faded_red_satin, itemList.trimmed_red_silk, itemList.rich_red_brocade],
      book: [itemList.teachings_of_admonition, itemList.guide_to_admonition, itemList.philosophies_of_admonition],
      boss: itemList.puppet_strings,
    },
    element: elements.anemo,
  },
  fischl: {
    id: 'fischl',
    name: 'Fischl',
    rarity: 4,
    region:regions.mondstadt,
    weapon: weapons.bow,
    description: fischl.description,
    constellations: fischl.constellations,
    passive: fischl.passives,
    skill: fischl.elementalSkill,
    burst:fischl.burst,
    stats: {
      hp: 9189,
      atk: 244,
      def: 594,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 3,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 2,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 10,
          },
          {
            item: itemList.firm_arrowhead,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 4,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 20,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 8,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 30,
          },
          {
            item: itemList.sharp_arrowhead,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 12,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 45,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 20,
          },
          {
            item: itemList.small_lamp_grass,
            amount: 60,
          },
          {
            item: itemList.weathered_arrowhead,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.firm_arrowhead, itemList.sharp_arrowhead, itemList.weathered_arrowhead],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.spirit_locket_of_boreas,
    },
    element: elements.electro,
  },
  ganyu: {
    id: 'ganyu',
    name: 'Ganyu',
    rarity: 5,
    region:regions.liyue,
    weapon: weapons.bow,
    description: ganyu.description,
    constellations: ganyu.constellations,
    passive: ganyu.passives,
    skill: ganyu.elementalSkill,
    burst:ganyu.burst,
    stats: {
      hp: 9797,
      atk: 335,
      def: 630,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.qingxin,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.qingxin,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.qingxin,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.qingxin,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.qingxin,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.qingxin,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.shadow_of_the_warrior,
    },
    element: elements.cryo,
  },
  gorou: {
    id: 'gorou',
    name: 'Gorou',
    rarity: 4,
    region:regions.inazuma,
    weapon: weapons.bow,
    description: gorou.description,
    constellations: gorou.constellations,
    passive: gorou.passives,
    skill: gorou.elementalSkill,
    burst:gorou.burst,
    stats: {
      hp: 9570,
      atk: 183,
      def: 648,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sango_pearl,
            amount: 3,
          },
          {
            item: itemList.spectral_husk,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.perpetual_heart,
            amount: 2,
          },
          {
            item: itemList.sango_pearl,
            amount: 10,
          },
          {
            item: itemList.spectral_husk,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 4,
          },
          {
            item: itemList.sango_pearl,
            amount: 20,
          },
          {
            item: itemList.spectral_heart,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.perpetual_heart,
            amount: 8,
          },
          {
            item: itemList.sango_pearl,
            amount: 30,
          },
          {
            item: itemList.spectral_heart,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 12,
          },
          {
            item: itemList.sango_pearl,
            amount: 45,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 20,
          },
          {
            item: itemList.sango_pearl,
            amount: 60,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      book: [itemList.teachings_of_light, itemList.guide_to_light, itemList.philosophies_of_light],
      boss: itemList.molten_moment,
    },
    element: elements.geo,
  },
  hu_tao: {
    id: 'hu_tao',
    name: 'Hu Tao',
    rarity: 5,
    region:regions.liyue,
    weapon: weapons.polearm,
    description: hu_tao.description,
    constellations: hu_tao.constellations,
    passive: hu_tao.passives,
    skill: hu_tao.elementalSkill,
    burst:hu_tao.burst,
    stats: {
      hp: 15552,
      atk: 106,
      def: 876,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.silk_flower,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 2,
          },
          {
            item: itemList.silk_flower,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 4,
          },
          {
            item: itemList.silk_flower,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 8,
          },
          {
            item: itemList.silk_flower,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 12,
          },
          {
            item: itemList.silk_flower,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 20,
          },
          {
            item: itemList.silk_flower,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.shard_of_a_foul_legacy,
    },
    element: elements.pyro,
  },
  jean: {
    id: 'jean',
    name: 'Jean',
    rarity: 5,
    region:regions.mondstadt,
    weapon: weapons.sword,
    description: jean.description,
    constellations: jean.constellations,
    passive: jean.passives,
    skill: jean.elementalSkill,
    burst:jean.burst,
    stats: {
      hp: 14695,
      atk: 239,
      def: 769,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.dandelion_seed,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 2,
          },
          {
            item: itemList.dandelion_seed,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 4,
          },
          {
            item: itemList.dandelion_seed,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 8,
          },
          {
            item: itemList.dandelion_seed,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 12,
          },
          {
            item: itemList.dandelion_seed,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 20,
          },
          {
            item: itemList.dandelion_seed,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dvalins_plume,
    },
    element: elements.anemo,
  },
  kaedehara_kazuha: {
    id: 'kaedehara_kazuha',
    name: 'Kaedehara Kazuha',
    rarity: 5,
    region:regions.inazuma,
    weapon: weapons.sword,
    description: kaedehara_kazuha.description,
    constellations: kaedehara_kazuha.constellations,
    passive: kaedehara_kazuha.passives,
    skill: kaedehara_kazuha.elementalSkill,
    burst:kaedehara_kazuha.burst,
    stats: {
      hp: 13348,
      atk: 297,
      def: 807,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.marionette_core,
            amount: 2,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 4,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.marionette_core,
            amount: 8,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 12,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 20,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.gilded_scale,
    },
    element: elements.anemo,
  },
  kaeya: {
    id: 'kaeya',
    name: 'Kaeya',
    rarity: 4,
    region:regions.mondstadt,
    weapon: weapons.sword,
    description: kaeya.description,
    constellations: kaeya.constellations,
    passive: kaeya.passives,
    skill: kaeya.elementalSkill,
    burst:kaeya.burst,
    stats: {
      hp: 11636,
      atk: 223,
      def: 792,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.calla_lily,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.calla_lily,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.calla_lily,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.calla_lily,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.calla_lily,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.calla_lily,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.spirit_locket_of_boreas,
    },
    element: elements.cryo,
  },
  kamisato_ayaka: {
    id: 'kamisato_ayaka',
    name: 'Kamisato Ayaka',
    rarity: 5,
    region:regions.inazuma,
    weapon: weapons.sword,
    description: kamisato_ayaka.description,
    constellations: kamisato_ayaka.constellations,
    passive: kamisato_ayaka.passives,
    skill: kamisato_ayaka.elementalSkill,
    burst:kamisato_ayaka.burst,
    stats: {
      hp: 12858,
      atk: 342,
      def: 784,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sakura_bloom,
            amount: 3,
          },
          {
            item: itemList.old_handguard,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.perpetual_heart,
            amount: 2,
          },
          {
            item: itemList.sakura_bloom,
            amount: 10,
          },
          {
            item: itemList.old_handguard,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 4,
          },
          {
            item: itemList.sakura_bloom,
            amount: 20,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.perpetual_heart,
            amount: 8,
          },
          {
            item: itemList.sakura_bloom,
            amount: 30,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 12,
          },
          {
            item: itemList.sakura_bloom,
            amount: 45,
          },
          {
            item: itemList.famed_handguard,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.perpetual_heart,
            amount: 20,
          },
          {
            item: itemList.sakura_bloom,
            amount: 60,
          },
          {
            item: itemList.famed_handguard,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      boss: itemList.bloodjade_branch,
    },
    element: elements.cryo,
  },
  kamisato_ayato: {
    id: 'kamisato_ayato',
    name: 'Kamisato Ayato',
    rarity: 5,
    region:regions.inazuma,
    weapon: weapons.sword,
    description: kamisato_ayato.description,
    constellations: kamisato_ayato.constellations,
    passive: kamisato_ayato.passives,
    skill: kamisato_ayato.elementalSkill,
    burst:kamisato_ayato.burst,
    stats: {
      hp: 13715,
      atk: 299,
      def: 769,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sakura_bloom,
            amount: 3,
          },
          {
            item: itemList.old_handguard,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 2,
          },
          {
            item: itemList.sakura_bloom,
            amount: 10,
          },
          {
            item: itemList.old_handguard,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 4,
          },
          {
            item: itemList.sakura_bloom,
            amount: 20,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 8,
          },
          {
            item: itemList.sakura_bloom,
            amount: 30,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 12,
          },
          {
            item: itemList.sakura_bloom,
            amount: 45,
          },
          {
            item: itemList.famed_handguard,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 20,
          },
          {
            item: itemList.sakura_bloom,
            amount: 60,
          },
          {
            item: itemList.famed_handguard,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      boss: itemList.mudra_of_the_malefic_general,
    },
    element: elements.hydro,
  },
  keqing: {
    id: 'keqing',
    name: 'Keqing',
    rarity: 5,
    region:regions.liyue,
    weapon: weapons.sword,
    description: keqing.description,
    constellations: keqing.constellations,
    passive: keqing.passives,
    skill: keqing.elementalSkill,
    burst:keqing.burst,
    stats: {
      hp: 13103,
      atk: 323,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.cor_lapis,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 2,
          },
          {
            item: itemList.cor_lapis,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 4,
          },
          {
            item: itemList.cor_lapis,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 8,
          },
          {
            item: itemList.cor_lapis,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 12,
          },
          {
            item: itemList.cor_lapis,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 20,
          },
          {
            item: itemList.cor_lapis,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.ring_of_boreas,
    },
    element: elements.electro,
  },
  klee: {
    id: 'klee',
    name: 'Klee',
    rarity: 5,
    region:regions.mondstadt,
    weapon: weapons.catalyst,
    description: klee.description,
    constellations: klee.constellations,
    passive: klee.passives,
    skill: klee.elementalSkill,
    burst:klee.burst,
    stats: {
      hp: 10287,
      atk: 311,
      def: 615,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.ring_of_boreas,
    },
    element: elements.pyro,
  },
  kujou_sara: {
    id: 'kujou_sara',
    name: 'Kujou Sara',
    rarity: 4,
    region:regions.inazuma,
    weapon: weapons.bow,
    description: kujou_sara.description,
    constellations: kujou_sara.constellations,
    passive: kujou_sara.passives,
    skill: kujou_sara.elementalSkill,
    burst:kujou_sara.burst,
    stats: {
      hp: 9570,
      atk: 195,
      def: 628,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.dendrobium,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.storm_beads,
            amount: 2,
          },
          {
            item: itemList.dendrobium,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 4,
          },
          {
            item: itemList.dendrobium,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.storm_beads,
            amount: 8,
          },
          {
            item: itemList.dendrobium,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 12,
          },
          {
            item: itemList.dendrobium,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 20,
          },
          {
            item: itemList.dendrobium,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      boss: itemList.ashen_heart,
    },
    element: elements.electro,
  },
  kuki_shinobu: {
    id: 'kuki_shinobu',
    name: 'Kuki Shinobu',
    rarity: 4,
    region:regions.inazuma,
    weapon: weapons.sword,
    description: kuki_shinobu.description,
    constellations: kuki_shinobu.constellations,
    passive: kuki_shinobu.passives,
    skill: kuki_shinobu.elementalSkill,
    burst:kuki_shinobu.burst,
    stats: {
      hp: 12289,
      atk: 212,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.naku_weed,
            amount: 3,
          },
          {
            item: itemList.spectral_husk,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 2,
          },
          {
            item: itemList.naku_weed,
            amount: 10,
          },
          {
            item: itemList.spectral_husk,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 4,
          },
          {
            item: itemList.naku_weed,
            amount: 20,
          },
          {
            item: itemList.spectral_heart,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 8,
          },
          {
            item: itemList.naku_weed,
            amount: 30,
          },
          {
            item: itemList.spectral_heart,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 12,
          },
          {
            item: itemList.naku_weed,
            amount: 45,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 20,
          },
          {
            item: itemList.naku_weed,
            amount: 60,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      book: [itemList.teachings_of_elegance, itemList.guide_to_elegance, itemList.philosophies_of_elegance],
      boss: itemList.tears_of_the_calamitous_god,
    },
    element: elements.electro,
  },
  layla: {
    id: 'layla',
    name: 'Layla',
    rarity: 4,
    region:regions.sumeru,
    weapon: weapons.sword,
    description: layla.description,
    constellations: layla.constellations,
    passive: layla.passives,
    skill: layla.elementalSkill,
    burst:layla.burst,
    stats: {
      hp: 11092,
      atk: 217,
      def: 655,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 2,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 4,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 8,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 12,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 20,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_ingenuity, itemList.guide_to_ingenuity, itemList.philosophies_of_ingenuity],
      boss: itemList.mirror_of_mushin,
    },
    element: elements.cryo,
  },
  lisa: {
    id: 'lisa',
    name: 'Lisa',
    rarity: 4,
    region:regions.mondstadt,
    weapon: weapons.catalyst,
    description: lisa.description,
    constellations: lisa.constellations,
    passive: lisa.passives,
    skill: lisa.elementalSkill,
    burst:lisa.burst,
    stats: {
      hp: 9570,
      atk: 232,
      def: 573,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.valberry,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 2,
          },
          {
            item: itemList.valberry,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 4,
          },
          {
            item: itemList.valberry,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 8,
          },
          {
            item: itemList.valberry,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 12,
          },
          {
            item: itemList.valberry,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 20,
          },
          {
            item: itemList.valberry,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.dvalins_claw,
    },
    element: elements.electro,
  },
  mona: {
    id: 'mona',
    name: 'Mona',
    rarity: 5,
    region:regions.mondstadt,
    weapon: weapons.catalyst,
    description: mona.description,
    constellations: mona.constellations,
    passive: mona.passives,
    skill: mona.elementalSkill,
    burst:mona.burst,
    stats: {
      hp: 10409,
      atk: 287,
      def: 653,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 2,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 4,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 8,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 12,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 20,
          },
          {
            item: itemList.philanemo_mushroom,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.ring_of_boreas,
    },
    element: elements.hydro,
  },
  nahida: {
    id: 'nahida',
    name: 'Nahida',
    rarity: 5,
    region:regions.sumeru,
    weapon: weapons.catalyst,
    description: nahida.description,
    constellations: nahida.constellations,
    passive: nahida.passives,
    skill: nahida.elementalSkill,
    burst:nahida.burst,
    stats: {
      hp: 10360,
      atk: 299,
      def: 630,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 3,
          },
          {
            item: itemList.fungal_spores,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.quelled_creeper,
            amount: 2,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 10,
          },
          {
            item: itemList.fungal_spores,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 4,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 20,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.quelled_creeper,
            amount: 8,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 30,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 12,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 45,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.quelled_creeper,
            amount: 20,
          },
          {
            item: itemList.kalpalata_lotus,
            amount: 60,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.fungal_spores, itemList.luminescent_pollen, itemList.crystalline_cyst_dust],
      book: [itemList.teachings_of_ingenuity, itemList.guide_to_ingenuity, itemList.philosophies_of_ingenuity],
      boss: itemList.puppet_strings,
    },
    element: elements.dendro,
  },
  nilou: {
    id: 'nilou',
    name: 'Nilou',
    rarity: 5,
    region:regions.sumeru,
    weapon: weapons.sword,
    description: nilou.description,
    constellations: nilou.constellations,
    passive: nilou.passives,
    skill: nilou.elementalSkill,
    burst:nilou.burst,
    stats: {
      hp: 15185,
      atk: 230,
      def: 729,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.padisarah,
            amount: 3,
          },
          {
            item: itemList.fungal_spores,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 2,
          },
          {
            item: itemList.padisarah,
            amount: 10,
          },
          {
            item: itemList.fungal_spores,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 4,
          },
          {
            item: itemList.padisarah,
            amount: 20,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 8,
          },
          {
            item: itemList.padisarah,
            amount: 30,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 12,
          },
          {
            item: itemList.padisarah,
            amount: 45,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 20,
          },
          {
            item: itemList.padisarah,
            amount: 60,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.fungal_spores, itemList.luminescent_pollen, itemList.crystalline_cyst_dust],
      book: [itemList.teachings_of_praxis, itemList.guide_to_praxis, itemList.philosophies_of_praxis],
      boss: itemList.tears_of_the_calamitous_god,
    },
    element: elements.hydro,
  },
  ningguang: {
    id: 'ningguang',
    name: 'Ningguang',
    rarity: 4,
    region:regions.liyue,
    weapon: weapons.catalyst,
    description: ningguang.description,
    constellations: ningguang.constellations,
    passive: ningguang.passives,
    skill: ningguang.elementalSkill,
    burst:ningguang.burst,
    stats: {
      hp: 9787,
      atk: 212,
      def: 573,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.glaze_lily,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 2,
          },
          {
            item: itemList.glaze_lily,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 4,
          },
          {
            item: itemList.glaze_lily,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 8,
          },
          {
            item: itemList.glaze_lily,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 12,
          },
          {
            item: itemList.glaze_lily,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 20,
          },
          {
            item: itemList.glaze_lily,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.spirit_locket_of_boreas,
    },
    element: elements.geo,
  },
  noelle: {
    id: 'noelle',
    name: 'Noelle',
    rarity: 4,
    region:regions.mondstadt,
    weapon: weapons.claymore,
    description: noelle.description,
    constellations: noelle.constellations,
    passive: noelle.passives,
    skill: noelle.elementalSkill,
    burst:noelle.burst,
    stats: {
      hp: 12071,
      atk: 191,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.valberry,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 2,
          },
          {
            item: itemList.valberry,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 4,
          },
          {
            item: itemList.valberry,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 8,
          },
          {
            item: itemList.valberry,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 12,
          },
          {
            item: itemList.valberry,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 20,
          },
          {
            item: itemList.valberry,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dvalins_claw,
    },
    element: elements.geo,
  },
  qiqi: {
    id: 'qiqi',
    name: 'Qiqi',
    rarity: 5,
    region:regions.liyue,
    weapon: weapons.sword,
    description: qiqi.description,
    constellations: qiqi.constellations,
    passive: qiqi.passives,
    skill: qiqi.elementalSkill,
    burst:qiqi.burst,
    stats: {
      hp: 12368,
      atk: 287,
      def: 922,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.violetgrass,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.violetgrass,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.violetgrass,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.violetgrass,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.violetgrass,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.violetgrass,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.tail_of_boreas,
    },
    element: elements.cryo,
  },
  raiden_shogun: {
    id: 'raiden_shogun',
    name: 'Raiden Shogun',
    rarity: 5,
    region:regions.inazuma,
    weapon: weapons.polearm,
    description: raiden_shogun.description,
    constellations: raiden_shogun.constellations,
    passive: raiden_shogun.passives,
    skill: raiden_shogun.elementalSkill,
    burst: raiden_shogun.burst,
    stats: {
      hp: 12907,
      atk: 337,
      def: 789,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 3,
          },
          {
            item: itemList.old_handguard,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.storm_beads,
            amount: 2,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 10,
          },
          {
            item: itemList.old_handguard,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 4,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 20,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.storm_beads,
            amount: 8,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 30,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 12,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 45,
          },
          {
            item: itemList.famed_handguard,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.storm_beads,
            amount: 20,
          },
          {
            item: itemList.amakumo_fruit,
            amount: 60,
          },
          {
            item: itemList.famed_handguard,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      book: [itemList.teachings_of_light, itemList.guide_to_light, itemList.philosophies_of_light],
      boss: itemList.molten_moment,
    },
    element: elements.electro,
  },
  razor: {
    id: 'razor',
    name: 'Razor',
    rarity: 4,
    region:regions.mondstadt,
    weapon: weapons.claymore,
    description: razor.description,
    constellations: razor.constellations,
    passive: razor.passives,
    skill: razor.elementalSkill,
    burst:razor.burst,
    stats: {
      hp: 11962,
      atk: 234,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.wolfhook,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 2,
          },
          {
            item: itemList.wolfhook,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 4,
          },
          {
            item: itemList.wolfhook,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.lightning_prism,
            amount: 8,
          },
          {
            item: itemList.wolfhook,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 12,
          },
          {
            item: itemList.wolfhook,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.lightning_prism,
            amount: 20,
          },
          {
            item: itemList.wolfhook,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_resistance, itemList.guide_to_resistance, itemList.philosophies_of_resistance],
      boss: itemList.dvalins_claw,
    },
    element: elements.electro,
  },
  rosaria: {
    id: 'rosaria',
    name: 'Rosaria',
    region:regions.mondstadt,
    rarity: 4,
    weapon: weapons.polearm,
    description: rosaria.description,
    constellations: rosaria.constellations,
    passive: rosaria.passives,
    skill: rosaria.elementalSkill,
    burst:rosaria.burst,
    stats: {
      hp: 12289,
      atk: 240,
      def: 710,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.valberry,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 2,
          },
          {
            item: itemList.valberry,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 4,
          },
          {
            item: itemList.valberry,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 8,
          },
          {
            item: itemList.valberry,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 12,
          },
          {
            item: itemList.valberry,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.hoarfrost_core,
            amount: 20,
          },
          {
            item: itemList.valberry,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.shadow_of_the_warrior,
    },
    element: elements.cryo,
  },
  sangonomiya_kokomi: {
    id: 'sangonomiya_kokomi',
    name: 'Sangonomiya Kokomi',
    rarity: 5,
    region:regions.inazuma,
    weapon: weapons.catalyst,
    description: sangonomiya_kokomi.description,
    constellations: sangonomiya_kokomi.constellations,
    passive: sangonomiya_kokomi.passives,
    skill: sangonomiya_kokomi.elementalSkill,
    burst:sangonomiya_kokomi.burst,
    stats: {
      hp: 13471,
      atk: 234,
      def: 657,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sango_pearl,
            amount: 3,
          },
          {
            item: itemList.spectral_husk,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 2,
          },
          {
            item: itemList.sango_pearl,
            amount: 10,
          },
          {
            item: itemList.spectral_husk,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 4,
          },
          {
            item: itemList.sango_pearl,
            amount: 20,
          },
          {
            item: itemList.spectral_heart,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 8,
          },
          {
            item: itemList.sango_pearl,
            amount: 30,
          },
          {
            item: itemList.spectral_heart,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 12,
          },
          {
            item: itemList.sango_pearl,
            amount: 45,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.dew_of_repudiation,
            amount: 20,
          },
          {
            item: itemList.sango_pearl,
            amount: 60,
          },
          {
            item: itemList.spectral_nucleus,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.spectral_husk, itemList.spectral_heart, itemList.spectral_nucleus],
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      boss: itemList.hellfire_butterfly,
    },
    element: elements.hydro,
  },
  sayu: {
    id: 'sayu',
    name: 'Sayu',
    rarity: 4,
    region:regions.inazuma,
    weapon: weapons.claymore,
    description: sayu.description,
    constellations: sayu.constellations,
    passive: sayu.passives,
    skill: sayu.elementalSkill,
    burst:sayu.burst,
    stats: {
      hp: 11854,
      atk: 244,
      def: 745,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.crystal_marrow,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.marionette_core,
            amount: 2,
          },
          {
            item: itemList.crystal_marrow,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 4,
          },
          {
            item: itemList.crystal_marrow,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.marionette_core,
            amount: 8,
          },
          {
            item: itemList.crystal_marrow,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 12,
          },
          {
            item: itemList.crystal_marrow,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.marionette_core,
            amount: 20,
          },
          {
            item: itemList.crystal_marrow,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_light, itemList.guide_to_light, itemList.philosophies_of_light],
      boss: itemList.gilded_scale,
    },
    element: elements.anemo,
  },
  shenhe: {
    id: 'shenhe',
    name: 'Shenhe',
    rarity: 5,
    region:regions.liyue,
    weapon: weapons.polearm,
    description: shenhe.description,
    constellations: shenhe.constellations,
    passive: shenhe.passives,
    skill: shenhe.elementalSkill,
    burst:shenhe.burst,
    stats: {
      hp: 12993,
      atk: 304,
      def: 830,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.shivada_jade_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.qingxin,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 3,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 2,
          },
          {
            item: itemList.qingxin,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_fragment,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 4,
          },
          {
            item: itemList.qingxin,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 3,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 8,
          },
          {
            item: itemList.qingxin,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_chunk,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 12,
          },
          {
            item: itemList.qingxin,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.shivada_jade_gemstone,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 20,
          },
          {
            item: itemList.qingxin,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.hellfire_butterfly,
    },
    element: elements.cryo,
  },
  shikanoin_heizou: {
    id: 'shikanoin_heizou',
    name: 'Shikanoin Heizou',
    rarity: 4,
    region:regions.inazuma,
    weapon: weapons.catalyst,
    description: shikanoin_heizou.description,
    constellations: shikanoin_heizou.constellations,
    passive: shikanoin_heizou.passives,
    skill: shikanoin_heizou.elementalSkill,
    burst:shikanoin_heizou.burst,
    stats: {
      hp: 10657,
      atk: 225,
      def: 684,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.onikabuto,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 2,
          },
          {
            item: itemList.onikabuto,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 4,
          },
          {
            item: itemList.onikabuto,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 8,
          },
          {
            item: itemList.onikabuto,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 12,
          },
          {
            item: itemList.onikabuto,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 20,
          },
          {
            item: itemList.onikabuto,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      boss: itemList.the_meaning_of_aeons,
    },
    element: elements.anemo,
  },
  sucrose: {
    id: 'sucrose',
    name: 'Sucrose',
    rarity: 4,
    region:regions.mondstadt,
    weapon: weapons.catalyst,
    description: sucrose.description,
    constellations: sucrose.constellations,
    passive: sucrose.passives,
    skill: sucrose.elementalSkill,
    burst:sucrose.burst,
    stats: {
      hp: 9244,
      atk: 170,
      def: 703,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 3,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 2,
          },
          {
            item: itemList.windwheel_aster,
            amount: 10,
          },
          {
            item: itemList.whopperflower_nectar,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 4,
          },
          {
            item: itemList.windwheel_aster,
            amount: 20,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 8,
          },
          {
            item: itemList.windwheel_aster,
            amount: 30,
          },
          {
            item: itemList.shimmering_nectar,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 12,
          },
          {
            item: itemList.windwheel_aster,
            amount: 45,
          },
          {
            item: itemList.energy_nectar,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 20,
          },
          {
            item: itemList.windwheel_aster,
            amount: 60,
          },
          {
            item: itemList.energy_nectar,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.whopperflower_nectar, itemList.shimmering_nectar, itemList.energy_nectar],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.spirit_locket_of_boreas,
    },
    element: elements.anemo,
  },
  tartaglia: {
    id: 'tartaglia',
    name: 'Tartaglia',
    rarity: 5,
    region:regions.snezhnaya,
    weapon: weapons.bow,
    description: tartaglia.description,
    constellations: tartaglia.constellations,
    passive: tartaglia.passives,
    skill: tartaglia.elementalSkill,
    burst:tartaglia.burst,
    stats: {
      hp: 13103,
      atk: 301,
      def: 815,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.starconch,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 2,
          },
          {
            item: itemList.starconch,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 4,
          },
          {
            item: itemList.starconch,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 8,
          },
          {
            item: itemList.starconch,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 12,
          },
          {
            item: itemList.starconch,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 20,
          },
          {
            item: itemList.starconch,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_freedom, itemList.guide_to_freedom, itemList.philosophies_of_freedom],
      boss: itemList.shard_of_a_foul_legacy,
    },
    element: elements.hydro,
  },
  thoma: {
    id: 'thoma',
    name: 'Thoma',
    rarity: 4,
    region:regions.inazuma,
    weapon: weapons.polearm,
    description: thoma.description,
    constellations: thoma.constellations,
    passive: thoma.passives,
    skill: thoma.elementalSkill,
    burst:thoma.burst,
    stats: {
      hp: 10331,
      atk: 202,
      def: 751,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 2,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 4,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 8,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 12,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 20,
          },
          {
            item: itemList.fluorescent_fungus,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      boss: itemList.hellfire_butterfly,
    },
    element: elements.pyro,
  },
  tighnari: {
    id: 'tighnari',
    name: 'Tighnari',
    rarity: 5,
    region:regions.sumeru,
    weapon: weapons.bow,
    description: tighnari.description,
    constellations: tighnari.constellations,
    passive: tighnari.passives,
    skill: tighnari.elementalSkill,
    burst:tighnari.burst,
    stats: {
      hp: 10850,
      atk: 268,
      def: 630,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.nagadus_emerald_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 3,
          },
          {
            item: itemList.fungal_spores,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 3,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 2,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 10,
          },
          {
            item: itemList.fungal_spores,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_fragment,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 4,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 20,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 3,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 8,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 30,
          },
          {
            item: itemList.luminescent_pollen,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_chunk,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 12,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 45,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.nagadus_emerald_gemstone,
            amount: 6,
          },
          {
            item: itemList.majestic_hooked_beak,
            amount: 20,
          },
          {
            item: itemList.nilotpala_lotus,
            amount: 60,
          },
          {
            item: itemList.crystalline_cyst_dust,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.fungal_spores, itemList.luminescent_pollen, itemList.crystalline_cyst_dust],
      book: [itemList.teachings_of_admonition, itemList.guide_to_admonition, itemList.philosophies_of_admonition],
      boss: itemList.the_meaning_of_aeons,
    },
    element: elements.dendro,
  },
  traveler_anemo: {
    name: 'Traveler (Anemo)',
    id: 'traveler_anemo',
    rarity: 5,
    region:regions.outlander,
    element: elements.anemo,
    weapon: weapons.sword,
    description: traveler_anemo.description,
    constellations: traveler_anemo.constellations,
    passive: traveler_anemo.passives,
    skill: traveler_anemo.elementalSkill,
    burst:traveler_anemo.burst,
    sex: "player's choice",
    nation: 'mondstadt',
    ascension: [
      {
        items: [
          { item: itemList.brilliant_diamond_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_gemstone, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 10122, atk: 198, def: 635 },
    material: {
      book: [
        itemList.teachings_of_freedom,
        itemList.guide_to_resistance,
        itemList.guide_to_ballad,
        itemList.guide_to_freedom,
        itemList.guide_to_resistance,
        itemList.philosophies_of_ballad,
        itemList.philosophies_of_freedom,
        itemList.philosophies_of_resistance,
        itemList.philosophies_of_ballad,
      ],
      material: [
        itemList.divining_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
      ],
      boss: itemList.dvalins_sigh,
    },
  },
  traveler_geo: {
    name: 'Traveler (Geo)',
    id: 'traveler_geo',
    rarity: 5,
    region:regions.outlander,
    element: elements.geo,
    weapon: weapons.sword,
    description: traveler_geo.description,
    constellations: traveler_geo.constellations,
    passive: traveler_geo.passives,
    skill: traveler_geo.elementalSkill,
    burst:traveler_geo.burst,
    sex: "player's choice",
    nation: 'liyue',
    ascension: [
      {
        items: [
          { item: itemList.brilliant_diamond_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_gemstone, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 10122, atk: 198, def: 635 },
    material: {
      book: [
        itemList.teachings_of_prosperity,
        itemList.guide_to_diligence,
        itemList.guide_to_gold,
        itemList.guide_to_prosperity,
        itemList.guide_to_diligence,
        itemList.philosophies_of_gold,
        itemList.philosophies_of_prosperity,
        itemList.philosophies_of_diligence,
        itemList.philosophies_of_gold,
      ],
      material: [
        itemList.firm_arrowhead,
        itemList.sharp_arrowhead,
        itemList.sharp_arrowhead,
        itemList.sharp_arrowhead,
        itemList.sharp_arrowhead,
        itemList.weathered_arrowhead,
        itemList.weathered_arrowhead,
        itemList.weathered_arrowhead,
        itemList.weathered_arrowhead,
      ],
      boss: itemList.tail_of_boreas,
    },
    material_atk: {
      book: [
        itemList.teachings_of_freedom,
        itemList.guide_to_resistance,
        itemList.guide_to_ballad,
        itemList.guide_to_freedom,
        itemList.guide_to_resistance,
        itemList.philosophies_of_ballad,
        itemList.philosophies_of_freedom,
        itemList.philosophies_of_resistance,
        itemList.philosophies_of_ballad,
      ],
      material: [
        itemList.divining_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.sealed_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
        itemList.forbidden_curse_scroll,
      ],
      boss: itemList.dvalins_sigh,
    },
  },
  traveler_electro: {
    name: 'Traveler (Electro)',
    id: 'traveler_electro',
    rarity: 5,
    region:regions.outlander,
    element: elements.electro,
    weapon: weapons.sword,
    description: traveler_electro.description,
    constellations: traveler_electro.constellations,
    passive: traveler_electro.passives,
    skill: traveler_electro.elementalSkill,
    burst:traveler_electro.burst,
    sex: "player's choice",
    nation: 'inazuma',
    ascension: [
      {
        items: [
          { item: itemList.brilliant_diamond_sliver, amount: 1 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 3 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 10 },
          { item: itemList.damaged_mask, amount: 15 },
        ],
        mora: 40000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_fragment, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 20 },
          { item: itemList.stained_mask, amount: 12 },
        ],
        mora: 60000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 3 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 30 },
          { item: itemList.stained_mask, amount: 18 },
        ],
        mora: 80000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_chunk, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 45 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 100000,
      },
      {
        items: [
          { item: itemList.brilliant_diamond_gemstone, amount: 6 },
          { item: itemList.none, amount: null },
          { item: itemList.windwheel_aster, amount: 60 },
          { item: itemList.ominous_mask, amount: 24 },
        ],
        mora: 120000,
      },
    ],
    stats: { hp: 10122, atk: 198, def: 635 },
    material: {
      book: [
        itemList.teachings_of_transience,
        itemList.guide_to_elegance,
        itemList.guide_to_light,
        itemList.guide_to_transience,
        itemList.guide_to_elegance,
        itemList.philosophies_of_light,
        itemList.philosophies_of_transience,
        itemList.philosophies_of_elegance,
        itemList.philosophies_of_light,
      ],
      material: [
        itemList.old_handguard,
        itemList.kageuchi_handguard,
        itemList.kageuchi_handguard,
        itemList.kageuchi_handguard,
        itemList.kageuchi_handguard,
        itemList.famed_handguard,
        itemList.famed_handguard,
        itemList.famed_handguard,
        itemList.famed_handguard,
      ],
      boss: itemList.dragon_lords_crown,
    },
  },
  traveler_dendro: {
    id: 'traveler_dendro',
    name: 'Traveler (Dendro)',
    rarity: 5,
    region:regions.outlander,
    element: elements.dendro,
    weapon: weapons.sword,
    description: traveler_dendro.description,
    constellations: traveler_dendro.constellations,
    passive: traveler_dendro.passives,
    skill: traveler_dendro.elementalSkill,
    burst:traveler_dendro.burst,
    stats: {
      hp: 10875,
      atk: 212,
      def: 683,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.brilliant_diamond_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.brilliant_diamond_fragment,
            amount: 3,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.brilliant_diamond_fragment,
            amount: 6,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.brilliant_diamond_chunk,
            amount: 3,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.brilliant_diamond_chunk,
            amount: 6,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.brilliant_diamond_gemstone,
            amount: 6,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.windwheel_aster,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [
        itemList.fungal_spores,
        itemList.luminescent_pollen,
        itemList.luminescent_pollen,
        itemList.luminescent_pollen,
        itemList.luminescent_pollen,
        itemList.crystalline_cyst_dust,
        itemList.crystalline_cyst_dust,
        itemList.crystalline_cyst_dust,
        itemList.crystalline_cyst_dust,
      ],
      book: [
        itemList.teachings_of_admonition,
        itemList.guide_to_ingenuity,
        itemList.guide_to_praxis,
        itemList.guide_to_admonition,
        itemList.guide_to_ingenuity,
        itemList.philosophies_of_praxis,
        itemList.philosophies_of_admonition,
        itemList.philosophies_of_ingenuity,
        itemList.philosophies_of_praxis,
      ],
      boss: itemList.mudra_of_the_malefic_general,
    },
    element: elements.dendro,
  },
  venti: {
    id: 'venti',
    name: 'Venti',
    rarity: 5,
    region:regions.mondstadt,
    weapon: weapons.bow,
    description: venti.description,
    constellations: venti.constellations,
    passive: venti.passives,
    skill: venti.elementalSkill,
    burst:venti.burst,
    stats: {
      hp: 10531,
      atk: 263,
      def: 669,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.cecilia,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 2,
          },
          {
            item: itemList.cecilia,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 4,
          },
          {
            item: itemList.cecilia,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.hurricane_seed,
            amount: 8,
          },
          {
            item: itemList.cecilia,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 12,
          },
          {
            item: itemList.cecilia,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.hurricane_seed,
            amount: 20,
          },
          {
            item: itemList.cecilia,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_ballad, itemList.guide_to_ballad, itemList.philosophies_of_ballad],
      boss: itemList.tail_of_boreas,
    },
    element: elements.anemo,
  },
  wanderer: {
    id: 'wanderer',
    name: 'Wanderer',
    rarity: 5,
    region:regions.inazuma,
    weapon: weapons.catalyst,
    description: wanderer.description,
    constellations: wanderer.constellations,
    passive: wanderer.passives,
    skill: wanderer.elementalSkill,
    burst:wanderer.burst,
    stats: {
      hp: 10164,
      atk: 328,
      def: 607,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 3,
          },
          {
            item: itemList.old_handguard,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 2,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 10,
          },
          {
            item: itemList.old_handguard,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 4,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 20,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 8,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 30,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 12,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 45,
          },
          {
            item: itemList.famed_handguard,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.perpetual_caliber,
            amount: 20,
          },
          {
            item: itemList.rukkhashava_mushrooms,
            amount: 60,
          },
          {
            item: itemList.famed_handguard,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      book: [itemList.teachings_of_praxis, itemList.guide_to_praxis, itemList.philosophies_of_praxis],
      boss: itemList.dakas_bell,
    },
    element: elements.anemo,
  },
  xiangling: {
    id: 'xiangling',
    name: 'Xiangling',
    rarity: 4,
    region:regions.liyue,
    weapon: weapons.polearm,
    description: xiangling.description,
    constellations: xiangling.constellations,
    passive: xiangling.passives,
    skill: xiangling.elementalSkill,
    burst:xiangling.burst,
    stats: {
      hp: 10875,
      atk: 225,
      def: 669,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.jueyun_chili,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.jueyun_chili,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.jueyun_chili,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.jueyun_chili,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.jueyun_chili,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.jueyun_chili,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.dvalins_claw,
    },
    element: elements.pyro,
  },
  xiao: {
    id: 'xiao',
    name: 'Xiao',
    rarity: 5,
    region:regions.liyue,
    weapon: weapons.polearm,
    description: xiao.description,
    constellations: xiao.constellations,
    passive: xiao.passives,
    skill: xiao.elementalSkill,
    burst:xiao.burst,
    stats: {
      hp: 12736,
      atk: 349,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vayuda_turquoise_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.qingxin,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 2,
          },
          {
            item: itemList.qingxin,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_fragment,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 4,
          },
          {
            item: itemList.qingxin,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 8,
          },
          {
            item: itemList.qingxin,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_chunk,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 12,
          },
          {
            item: itemList.qingxin,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vayuda_turquoise_gemstone,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 20,
          },
          {
            item: itemList.qingxin,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.shadow_of_the_warrior,
    },
    element: elements.anemo,
  },
  xingqiu: {
    id: 'xingqiu',
    name: 'Xingqiu',
    rarity: 4,
    region:regions.liyue,
    weapon: weapons.sword,
    description: xingqiu.description,
    constellations: xingqiu.constellations,
    passive: xingqiu.passives,
    skill: xingqiu.elementalSkill,
    burst:xingqiu.burst,
    stats: {
      hp: 10222,
      atk: 202,
      def: 758,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.silk_flower,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 2,
          },
          {
            item: itemList.silk_flower,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 4,
          },
          {
            item: itemList.silk_flower,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.cleansing_heart,
            amount: 8,
          },
          {
            item: itemList.silk_flower,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 12,
          },
          {
            item: itemList.silk_flower,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.cleansing_heart,
            amount: 20,
          },
          {
            item: itemList.silk_flower,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.tail_of_boreas,
    },
    element: elements.hydro,
  },
  xinyan: {
    id: 'xinyan',
    name: 'Xinyan',
    rarity: 4,
    region:regions.liyue,
    weapon: weapons.claymore,
    description: xinyan.description,
    constellations: xinyan.constellations,
    passive: xinyan.passives,
    skill: xinyan.elementalSkill,
    burst:xinyan.burst,
    stats: {
      hp: 11201,
      atk: 249,
      def: 799,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.violetgrass,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 2,
          },
          {
            item: itemList.violetgrass,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 4,
          },
          {
            item: itemList.violetgrass,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.everflame_seed,
            amount: 8,
          },
          {
            item: itemList.violetgrass,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 12,
          },
          {
            item: itemList.violetgrass,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.everflame_seed,
            amount: 20,
          },
          {
            item: itemList.violetgrass,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.tusk_of_monoceros_caeli,
    },
    element: elements.pyro,
  },
  yae_miko: {
    id: 'yae_miko',
    name: 'Yae Miko',
    rarity: 5,
    region:regions.inazuma,
    weapon: weapons.catalyst,
    description: yae_miko.description,
    constellations: yae_miko.constellations,
    passive: yae_miko.passives,
    skill: yae_miko.elementalSkill,
    burst:yae_miko.burst,
    stats: {
      hp: 10372,
      atk: 340,
      def: 569,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.vajrada_amethyst_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 3,
          },
          {
            item: itemList.old_handguard,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 3,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 2,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 10,
          },
          {
            item: itemList.old_handguard,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_fragment,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 4,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 20,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 3,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 8,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 30,
          },
          {
            item: itemList.kageuchi_handguard,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_chunk,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 12,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 45,
          },
          {
            item: itemList.famed_handguard,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.vajrada_amethyst_gemstone,
            amount: 6,
          },
          {
            item: itemList.dragonheirs_false_fin,
            amount: 20,
          },
          {
            item: itemList.sea_ganoderma,
            amount: 60,
          },
          {
            item: itemList.famed_handguard,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.old_handguard, itemList.kageuchi_handguard, itemList.famed_handguard],
      book: [itemList.teachings_of_light, itemList.guide_to_light, itemList.philosophies_of_light],
      boss: itemList.the_meaning_of_aeons,
    },
    element: elements.electro,
  },
  yanfei: {
    id: 'yanfei',
    name: 'Yanfei',
    rarity: 4,
    region:regions.liyue,
    weapon: weapons.catalyst,
    description: yanfei.description,
    constellations: yanfei.constellations,
    passive: yanfei.passives,
    skill: yanfei.elementalSkill,
    burst:yanfei.burst,
    stats: {
      hp: 9352,
      atk: 240,
      def: 587,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 3,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 2,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 10,
          },
          {
            item: itemList.treasure_hoarder_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 4,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 20,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.juvenile_jade,
            amount: 8,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 30,
          },
          {
            item: itemList.silver_raven_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 12,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 45,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.juvenile_jade,
            amount: 20,
          },
          {
            item: itemList.noctilucous_jade,
            amount: 60,
          },
          {
            item: itemList.golden_raven_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.treasure_hoarder_insignia, itemList.silver_raven_insignia, itemList.golden_raven_insignia],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.bloodjade_branch,
    },
    element: elements.pyro,
  },
  yelan: {
    id: 'yelan',
    name: 'Yelan',
    rarity: 5,
    region:regions.liyue,
    weapon: weapons.bow,
    description: yelan.description,
    constellations: yelan.constellations,
    passive: yelan.passives,
    skill: yelan.elementalSkill,
    burst:yelan.burst,
    stats: {
      hp: 14450,
      atk: 244,
      def: 548,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.varunada_lazurite_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.starconch,
            amount: 3,
          },
          {
            item: itemList.recruits_insignia,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 2,
          },
          {
            item: itemList.starconch,
            amount: 10,
          },
          {
            item: itemList.recruits_insignia,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_fragment,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 4,
          },
          {
            item: itemList.starconch,
            amount: 20,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 3,
          },
          {
            item: itemList.runic_fang,
            amount: 8,
          },
          {
            item: itemList.starconch,
            amount: 30,
          },
          {
            item: itemList.sergeants_insignia,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_chunk,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 12,
          },
          {
            item: itemList.starconch,
            amount: 45,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.varunada_lazurite_gemstone,
            amount: 6,
          },
          {
            item: itemList.runic_fang,
            amount: 20,
          },
          {
            item: itemList.starconch,
            amount: 60,
          },
          {
            item: itemList.lieutenants_insignia,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.recruits_insignia, itemList.sergeants_insignia, itemList.lieutenants_insignia],
      book: [itemList.teachings_of_prosperity, itemList.guide_to_prosperity, itemList.philosophies_of_prosperity],
      boss: itemList.gilded_scale,
    },
    element: elements.hydro,
  },
  yoimiya: {
    id: 'yoimiya',
    name: 'Yoimiya',
    rarity: 5,
    region:regions.inazuma,
    weapon: weapons.bow,
    description: yoimiya.description,
    constellations: yoimiya.constellations,
    passive: yoimiya.passives,
    skill: yoimiya.elementalSkill,
    burst:yoimiya.burst,
    stats: {
      hp: 10164,
      atk: 323,
      def: 615,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.agnidus_agate_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.naku_weed,
            amount: 3,
          },
          {
            item: itemList.divining_scroll,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 3,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 2,
          },
          {
            item: itemList.naku_weed,
            amount: 10,
          },
          {
            item: itemList.divining_scroll,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_fragment,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 4,
          },
          {
            item: itemList.naku_weed,
            amount: 20,
          },
          {
            item: itemList.sealed_scroll,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 3,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 8,
          },
          {
            item: itemList.naku_weed,
            amount: 30,
          },
          {
            item: itemList.sealed_scroll,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_chunk,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 12,
          },
          {
            item: itemList.naku_weed,
            amount: 45,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.agnidus_agate_gemstone,
            amount: 6,
          },
          {
            item: itemList.smoldering_pearl,
            amount: 20,
          },
          {
            item: itemList.naku_weed,
            amount: 60,
          },
          {
            item: itemList.forbidden_curse_scroll,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.divining_scroll, itemList.sealed_scroll, itemList.forbidden_curse_scroll],
      book: [itemList.teachings_of_transience, itemList.guide_to_transience, itemList.philosophies_of_transience],
      boss: itemList.dragon_lords_crown,
    },
    element: elements.pyro,
  },
  yun_jin: {
    id: 'yun_jin',
    name: 'Yun Jin',
    rarity: 4,
    region:regions.liyue,
    weapon: weapons.polearm,
    description: yun_jin.description,
    constellations: yun_jin.constellations,
    passive: yun_jin.passives,
    skill: yun_jin.elementalSkill,
    burst:yun_jin.burst,
    stats: {
      hp: 10657,
      atk: 191,
      def: 734,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.glaze_lily,
            amount: 3,
          },
          {
            item: itemList.damaged_mask,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 2,
          },
          {
            item: itemList.glaze_lily,
            amount: 10,
          },
          {
            item: itemList.damaged_mask,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 4,
          },
          {
            item: itemList.glaze_lily,
            amount: 20,
          },
          {
            item: itemList.stained_mask,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 8,
          },
          {
            item: itemList.glaze_lily,
            amount: 30,
          },
          {
            item: itemList.stained_mask,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 12,
          },
          {
            item: itemList.glaze_lily,
            amount: 45,
          },
          {
            item: itemList.ominous_mask,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.riftborn_regalia,
            amount: 20,
          },
          {
            item: itemList.glaze_lily,
            amount: 60,
          },
          {
            item: itemList.ominous_mask,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.damaged_mask, itemList.stained_mask, itemList.ominous_mask],
      book: [itemList.teachings_of_diligence, itemList.guide_to_diligence, itemList.philosophies_of_diligence],
      boss: itemList.ashen_heart,
    },
    element: elements.geo,
  },
  zhongli: {
    id: 'zhongli',
    name: 'Zhongli',
    rarity: 5,
    region:regions.liyue,
    weapon: weapons.polearm,
    description: zhongli.description,
    constellations: zhongli.constellations,
    passive: zhongli.passives,
    skill: zhongli.elementalSkill,
    burst:zhongli.burst,
    stats: {
      hp: 14695,
      atk: 251,
      def: 738,
    },
    ascension: [
      {
        items: [
          {
            item: itemList.prithiva_topaz_sliver,
            amount: 1,
          },
          {
            item: itemList.none,
            amount: null,
          },
          {
            item: itemList.cor_lapis,
            amount: 3,
          },
          {
            item: itemList.slime_condensate,
            amount: 3,
          },
        ],
        mora: 20000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 2,
          },
          {
            item: itemList.cor_lapis,
            amount: 10,
          },
          {
            item: itemList.slime_condensate,
            amount: 15,
          },
        ],
        mora: 40000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_fragment,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 4,
          },
          {
            item: itemList.cor_lapis,
            amount: 20,
          },
          {
            item: itemList.slime_secretions,
            amount: 12,
          },
        ],
        mora: 60000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 3,
          },
          {
            item: itemList.basalt_pillar,
            amount: 8,
          },
          {
            item: itemList.cor_lapis,
            amount: 30,
          },
          {
            item: itemList.slime_secretions,
            amount: 18,
          },
        ],
        mora: 80000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_chunk,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 12,
          },
          {
            item: itemList.cor_lapis,
            amount: 45,
          },
          {
            item: itemList.slime_concentrate,
            amount: 12,
          },
        ],
        mora: 100000,
      },
      {
        items: [
          {
            item: itemList.prithiva_topaz_gemstone,
            amount: 6,
          },
          {
            item: itemList.basalt_pillar,
            amount: 20,
          },
          {
            item: itemList.cor_lapis,
            amount: 60,
          },
          {
            item: itemList.slime_concentrate,
            amount: 24,
          },
        ],
        mora: 120000,
      },
    ],
    material: {
      material: [itemList.slime_condensate, itemList.slime_secretions, itemList.slime_concentrate],
      book: [itemList.teachings_of_gold, itemList.guide_to_gold, itemList.philosophies_of_gold],
      boss: itemList.tusk_of_monoceros_caeli,
    },
    element: elements.geo,
  },
};
