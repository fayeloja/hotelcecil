import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Book,
  FileText,
  Library,
  Hash,
} from "lucide-react";

export function Appendix() {
  const [activeTab, setActiveTab] = useState<
    "register" | "extracts" | "footnotes" | "bibliography"
  >("register");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [searchFootnote, setSearchFootnote] = useState("");

  const guestData = {
    "Titled Nobility": [
      { name: "Sultan (later King) Mohammed V", year: "1947", footnote: "" },
      { name: "Rt. Hon. The Earl of Airlie", year: "1924", footnote: "85" },
      { name: "Conde de Albis", year: "1924", footnote: "81" },
      { name: "Marques de Almodovar", year: "1907", footnote: "58" },
      { name: "Marquessa de Almodovar", year: "1907", footnote: "58" },
      { name: "Conde de Barbate", year: "1924", footnote: "82" },
      { name: "Baron de Bartouch", year: "1908", footnote: "62" },
      { name: "Baron de Aersen Beyeren", year: "1924", footnote: "90" },
      { name: "Baroness de Aersen Beyeren", year: "1924", footnote: "90" },
      { name: "Lady Black", year: "1908", footnote: "60" },
      { name: "Baron de Brichanvant", year: "1924", footnote: "89" },
      { name: "Chevalier Bossano", year: "1901", footnote: "21" },
      { name: "Lady Augusta Browne", year: "1905", footnote: "39" },
      { name: "Baron de Burjania", year: "1923", footnote: "76" },
      { name: "Sir Winston Churchill, K.G.?", year: "1906", footnote: "6" },
      { name: "Hon. Miss Dashwood", year: "1903", footnote: "36" },
      { name: "Baroness Dobrzenski", year: "1906", footnote: "49" },
      { name: "Conde del Fresno", year: "1907", footnote: "57" },
      { name: "Rt. Hon. The Earl of Galway", year: "1901", footnote: "16" },
      { name: "Lady Gipps", year: "1907", footnote: "54" },
      { name: "Sir Cosmo Duff-Gordon", year: "1924", footnote: "80" },
      { name: "Lady Hall", year: "1924", footnote: "83" },
      { name: "Marques de Hara", year: "1923", footnote: "67" },
      { name: "Comte de Harcourt", year: "1924", footnote: "85" },
      { name: "Comtesse de Harcourt", year: "1924", footnote: "85" },
      { name: "Lady Elizabeth Harris", year: "1924", footnote: "84" },
      { name: "Baron de Hesent", year: "1924", footnote: "89" },
      { name: "Baron de Hortega", year: "1906", footnote: "49" },
      { name: "Baronesse de Hortega", year: "1906", footnote: "49" },
      { name: "Hon. Mrs. Jorcey", year: "1923", footnote: "69" },
      { name: "Rt. Hon. Lord Killanin", year: "1924", footnote: "82" },
      { name: "Baron de Larnbea", year: "1924", footnote: "89" },
      { name: "Sir John Lavery, R.A.", year: "1906", footnote: "48, 50" },
      { name: "Marques de Lazengren", year: "1923", footnote: "72" },
      { name: "Marques de Lierta", year: "1907", footnote: "57" },
      { name: "Conde de Lieyva", year: "1924", footnote: "88" },
      { name: "Lady DeVere MacLean", year: "1901", footnote: "8" },
      { name: "Lady Malmesbury", year: "1924", footnote: "84" },
      { name: "Lady Mathew", year: "1924", footnote: "87" },
      { name: "Comtesse de Menace", year: "1923", footnote: "70" },
      { name: "Marquis de Crequi-Montford", year: "1923", footnote: "73" },
      { name: "Marquise de Crequi-Montford", year: "1923", footnote: "73" },
      { name: "Marquis de Mos", year: "1924", footnote: "85" },
      { name: "Lady Munro", year: "1924", footnote: "86" },
      { name: "H.S.H. Prince Charles Murat", year: "1924", footnote: "81" },
      { name: "H.R.H. Prince Henri d'Orleans", year: "1900", footnote: "2" },
      { name: "Rt. Hon. Viscount Peel", year: "1924", footnote: "82" },
      { name: "Marques de Pontejos", year: "1924", footnote: "88" },
      { name: "Comte de Pomereu", year: "1924", footnote: "81" },
      { name: "Comtesse de Revenel", year: "1907", footnote: "53" },
      { name: "Lady de Roebeck", year: "1924", footnote: "86" },
      { name: "Marchioness de Sain", year: "1907", footnote: "53" },
      { name: "Conde and Condessa de San Luis", year: "1923", footnote: "74" },
      {
        name: "H.R.H. Princess Margaret of Saxony",
        year: "1907",
        footnote: "55",
      },
      { name: "H.H. Princess Schronburg", year: "1907", footnote: "56, 58" },
      { name: "Rt. Hon. The Earl of Selborne", year: "1923", footnote: "66" },
      { name: "Countess of Selborne", year: "1923", footnote: "66" },
      { name: "Sir William and Lady Smith", year: "1923", footnote: "71" },
      { name: "Baroness Ungern-Starnberg", year: "1906", footnote: "46" },
      { name: "Baron de Vos van Steenwyk", year: "1907", footnote: "59" },
      { name: "Baroness de Vos van Steenwyk", year: "1907", footnote: "59" },
      { name: "Lord Crighton Stuart", year: "1923", footnote: "66" },
      { name: "Rt. Hon. Lord Teynham", year: "1903", footnote: "36" },
      { name: "Lady Teynham", year: "1903", footnote: "36" },
      { name: "Lady Toothill", year: "1923", footnote: "68" },
      { name: "Duque de Tovar", year: "1908", footnote: "61" },
      { name: "Visconde de la Vega", year: "1902", footnote: "34" },
      { name: "Viscondessa de la Vega", year: "1902", footnote: "34" },
      { name: "Comtesse de Villeneuve", year: "1923", footnote: "70, 75" },
      { name: "Lady Wilbraham", year: "1905", footnote: "39, 47" },
    ],
    "Military Officers - Generals": [
      { name: "General Martinez Anido", year: "1923", footnote: "68" },
      { name: "General R. F. J. Banfield, C.B.", year: "1906", footnote: "46" },
      {
        name: "General Sir Wilsone Black, K.C.B",
        year: "1901",
        footnote: "27, 60",
      },
      {
        name: "General Sir Reginald Gipps, G.C.B.",
        year: "1907",
        footnote: "54",
      },
      { name: "Major-General Grove", year: "1901", footnote: "25" },
      { name: "General Gomez Jordana", year: "1923", footnote: "67" },
      { name: "General Arsenio Linares", year: "1901", footnote: "22" },
      { name: "Major-General McGoun", year: "1901", footnote: "30" },
      { name: "General Sir Charles Munro", year: "1924", footnote: "86" },
      { name: "General Nicholas", year: "1924", footnote: "91" },
      { name: "General Nicholson", year: "1901", footnote: "24, 25, 30" },
      { name: "Brig. General Rudkin", year: "1924", footnote: "85" },
    ],
    "Naval Officers - Admirals": [
      { name: "Admiral Brent", year: "1901", footnote: "21" },
      { name: "Rear-Admiral Caillard", year: "1901", footnote: "14" },
      { name: "Admiral Dowding", year: "1901", footnote: "26" },
      { name: "Admiral Sir Reginald Hall", year: "1924", footnote: "83" },
      { name: "Admiral E. Reeves", year: "1923", footnote: "75" },
      { name: "Vice-Admiral Sir Hugh Toothill", year: "1923", footnote: "69" },
    ],
    "Other Military Officers": [
      { name: "Commander Abbay", year: "1924", footnote: "79" },
      { name: "Captain Anderson", year: "1924", footnote: "79" },
      { name: "Colonel Bates", year: "1901", footnote: "12" },
      { name: "Colonel Banfield", year: "1903", footnote: "37" },
      { name: "Lieutenant Banfield", year: "1906", footnote: "46" },
      { name: "Major Baring", year: "1924", footnote: "86" },
      { name: "Captain Berresford", year: "1901", footnote: "25" },
      { name: "Captain Betty", year: "1901", footnote: "17" },
      { name: "Captain Butler-Bowen", year: "1905", footnote: "43" },
      { name: "Colonel Campbell", year: "1901", footnote: "25" },
      { name: "Captain Cave", year: "1901", footnote: "17" },
      { name: "Lieutenant Cooke", year: "1902", footnote: "27" },
      { name: "Colonel Coles", year: "1924", footnote: "93" },
      { name: "Major Comyn", year: "1908", footnote: "63" },
      { name: "Commander Cornwallis", year: "1924", footnote: "83" },
      { name: "Major Crawford", year: "1902", footnote: "29" },
      { name: "Lieutenant Crawshay", year: "1906", footnote: "47" },
      { name: "Major Elkington", year: "1901", footnote: "12" },
      { name: "Lt. Colonel Ellis", year: "1923, 1924", footnote: "65, 79" },
      { name: "Lieutenant Fanchawe", year: "1901", footnote: "20" },
      { name: "Captain Galloway", year: "1901", footnote: "26" },
      { name: "Captain Gamble", year: "1901", footnote: "20" },
      { name: "Captain Hedley-Garland", year: "1906", footnote: "46" },
      { name: "Major Howell", year: "1908", footnote: "63" },
      { name: "Captain Hughes", year: "1924", footnote: "93" },
      { name: "Colonel Huot", year: "1924", footnote: "83" },
      { name: "Lieutenant James", year: "1901", footnote: "20" },
      { name: "Lt. Colonel Little", year: "1908", footnote: "63" },
      { name: "Captain Locke, R.A.", year: "1901", footnote: "8" },
      { name: "Lieutenant MacCarthy", year: "1924", footnote: "86" },
      { name: "Colonel MacKerath", year: "1923", footnote: "77" },
      { name: "Major MacLear", year: "1901", footnote: "18" },
      { name: "Lieutenant Mortimer", year: "1901", footnote: "20" },
      { name: "Captain Oakes", year: "1924", footnote: "93" },
      { name: "Lt. Colonel Newman", year: "1923", footnote: "70" },
      { name: "Major Penrose", year: "1924", footnote: "79" },
      { name: "Major Rankin", year: "1901, 1902", footnote: "19, 27" },
      { name: "Major Rawlinson", year: "1905", footnote: "43" },
      { name: "Lieutenant Sharman", year: "1924", footnote: "79" },
      { name: "Commandant Sorela", year: "1905", footnote: "42" },
      { name: "Captain Whitloch", year: "1901", footnote: "19" },
      { name: "Colonel Wilson", year: "1924", footnote: "86" },
      { name: "Captain Wright", year: "1924", footnote: "79" },
      { name: "Captain Zarras", year: "1901", footnote: "18" },
    ],
    "Diplomats and Politicians": [
      { name: "Dip. Agent Brambilla", year: "1923", footnote: "68" },
      { name: "Congressman Cochran", year: "1906", footnote: "52" },
      { name: "H.E. Ambassador Dearing", year: "1924", footnote: "87" },
      { name: "Vice-Consul Driscoll", year: "1924", footnote: "79" },
      { name: "Consul de Costa Freire", year: "1903", footnote: "38" },
      { name: "Vice-Consul Langerman", year: "1902", footnote: "31" },
      { name: "Consul Col. MacKerath", year: "1923", footnote: "77" },
      { name: "Consul Marti", year: "1901", footnote: "28" },
      { name: "Consul Murphy", year: "1924", footnote: "79" },
      { name: "Consul Prescot", year: "1905", footnote: "27" },
      { name: "H.E. Ambassador Révoil", year: "1901", footnote: "14" },
      { name: "Consul Ruggiero", year: "1903", footnote: "38" },
      { name: "Naval Attaché Sorela", year: "1905", footnote: "42" },
      { name: "Lord Crighton Stuart, M.P.", year: "1923", footnote: "66" },
      { name: "Vice-Consul Tonnies", year: "1905", footnote: "40" },
      { name: "H.E. Ambassador Duque de Tovar", year: "1908", footnote: "61" },
      { name: "Crown-Minister Villaneuva", year: "1908", footnote: "61" },
    ],
    "Authors, Painters, Actors and Writers": [
      { name: "Owen W. Apperley, R.I.", year: "1901", footnote: "23" },
      { name: "S. L. Bensusan", year: "1903", footnote: "36" },
      { name: "Mariano Bertuchi", year: "1901", footnote: "15" },
      { name: "R. B. Cunnighame-Graham", year: "1906", footnote: "48, 50" },
      { name: "Archibald S. Forrest", year: "1903", footnote: "36" },
      {
        name: "John Lavery, R.A., R.S.A., R.H.A.",
        year: "1906",
        footnote: "48, 50",
      },
      { name: "Mr. Budget-Meakin", year: "1900", footnote: "3" },
      { name: "Francis Bacon", year: "1959", footnote: "" },
      { name: "Douglas Fairbanks", year: "", footnote: "" },
      { name: "María Guerrero", year: "", footnote: "" },
      { name: "Cesar González Ruano", year: "", footnote: "" },
    ],
    Clergymen: [
      { name: "Archdeacon Buxton", year: "1924", footnote: "94" },
      { name: "Bishop Collins of Gibraltar", year: "1905", footnote: "45" },
      { name: "Reverend J. Hacket", year: "1902", footnote: "30" },
      { name: "Monseignor Lumbrosco", year: "1924", footnote: "79" },
      { name: "Reverend J. A. Moore", year: "1905", footnote: "45" },
      { name: "Monseignor Pappalardo", year: "1924", footnote: "79" },
    ],
  };

  const footnotes = [
    {
      num: 1,
      source: "Al-Moghreb Al-Aksa, Saturday, February 25th, 1899",
      text: '"The inauguration of the Hotel Cecil, situated on the beach, took place on Saturday evening. The building which was formerly occupied by Senor Recio\'s Universal Hotel has been thoroughly reconstructed, and the newly fitted hotel is under the able management of Mr. John Saccone."',
    },
    {
      num: 2,
      source: "Al-Moghreb Al-Aksa, Saturday, April 1st, 1900",
      text: '"Prince Henri d\'Orleans arrived here from Tunis and Oran on Wednesday, and is staying at the Hotel Cecil."',
    },
    {
      num: 3,
      source: "Al-Moghreb Al-Aksa, June 30th, 1900",
      text: "Mr. and Mrs. Budget Meakin arrived here on Wednesday morning on the British steamship Arafat, from Liverpool. They are staying at the Hotel Cecil and intend to remain here about a month, during which Mr. Meakin will be busy revising the proofs of his second work on Morocco entitled 'THE MOORS' which is to be published in a few weeks.",
    },
    {
      num: 4,
      source: "Al-Moghreb Al-Aksa, Saturday, January 26th, 1901",
      text: 'The contemplated visit to Tanger, for a week, of Dr. Millard of New York, the distinguished American Dentist, is now confirmed. Dr. Millard will arrive here from Gibraltar on Saturday, February 2nd, and may be consulted at the Hotel Cecil."',
    },
    {
      num: 5,
      source: "Al-Moghreb Al-Aksa, March 30th, 1901",
      text: '"Hotel Cecil, Passengers arrived from the 23rd to 30th March, Mrs. Greathed, Miss Clive, Miss Cowper, Miss Yates, Mr. Thomas Collier, Miss Blunt, Mr. and Mrs. Gilfoyle, Mr. and Mrs. A. A. Ferguson, Mr. Charles Grant Tennant, Mr. F. Heath Stubs, Miss F. Stubs, Mr. A. S. Tetley, Mr. R. B. Ainswith."',
    },
    {
      num: 6,
      source: "Al-Moghreb Al-Aksa, Saturday, April 13th 1901",
      text: '"Hotel Cecil, guests, Miss Faraguhane, Mrs. Daubees, Mr. and Mrs. Orton, Miss Orton, Don Juan Garcia, Mr. and Mrs. Giral, Mr. and Mrs. Blythe, Mr. J. J. Keane, MR. CHURCHILL, Mr. C. M. Wells, Mr. A. B; Ramsay, Mr. R.P.L. Brooker..."',
    },
    {
      num: 7,
      source: "Al-Moghreb Al-Aksa, Saturday, April 20th 1901",
      text: '"Hotel Cecil, Passengers arrived from 13th to the 20th April, Mr. Norman MacLeod, Mr. W. Gladat, Mr. Horold Gillatt, Mr. and Mrs. Boch, Julia Andrews, Mr. and Mrs. Rugeroni, Mr. V. Imossi, Mr. J. Bossano."',
    },
    {
      num: 8,
      source: "Al-Moghreb Al-Aksa, Saturday, May 4th 1901",
      text: '"Dr Millard, Specialist American Dentist, will be pleased to receive those who may require his services during the coming week, at the Hotel Cecil." And in the same issue "Hotel Cecil, guests, Mr. K.M. Tormill, Captain Locke, R.A., R. Betts Brown, R.A., J. M. Gatrill, Dr. and Mrs. Mallard, Miss M. Spencer, Miss Williams, Mr. and Mrs. Williams, Mr. and Mrs. J.H. Jacobs, Mrs. De VERE MacLEAN, Mr. N.H. Kisbany."',
    },
    {
      num: 10,
      source: "Al-Moghreb Al-Aksa, Saturday, May 11th, 1901",
      text: '"Hotel Cecil, guests, Mr. Wm. Marshall, Mr. C. D. Marshall, Mr. R. A. Beamer; Mr. and Mrs. Berdier, Mr. A. Bautice, Mr. R. L. Wilson, Mr. Bosworth, Mr. W. H. Robinson, Dr. P. Steiner."',
    },
    {
      num: 11,
      source: "Al-Moghreb Al Aksa, Saturday, May 25th 1901",
      text: '"Hotel Cecil, passengers arrived from 18th to 25th May, Dr. Steiner, Mr. E. J. Brum, Mr. and Mrs. Wm. Tait, Mr. and Mrs. Ormerod, Mr. R. M. Caldiera, Mrs. M. C. Caldiera, Mr. Romano Gomes, Mr. Thomas E. Cornwall, Mr. Neighbour and party."',
    },
    {
      num: 12,
      source: "Al-Moghreb Al-Aksa, June 1st, 1901",
      text: "Hotel Cecil, guests included Major Elkington and Colonel Bates.",
    },
    {
      num: 13,
      source: "Al-Moghreb Al-Aksa, June 8th, 1901",
      text: "Hotel Cecil, guests included Mr. and Mrs. Livesey.",
    },
    {
      num: 14,
      source: "Al-Moghreb Al-Aksa, June 15th, 1901",
      text: "\"On Monday night a ‘punch d'honneur’ was offered at the Hotel Cecil by the French residents to His Excellency Monsieur Révoil (the French Ambassador), which was also attended by Rear-Admiral Caillard, the officers of the two French cruisers in port, and the personnel of the French legation. The kiosk of the Hotel Cecil, were the refreshment was served, was decorated with French flags, flowers and green foliage, and the band of the cruiser Pothau played at intervals. Patriotic speeches of congratulations and a hearty farewell were given to the Minister, and responded to by His Excellency.”",
    },
    {
      num: 15,
      source: "Al-Moghreb Al-Aksa, June 15th, 1901",
      text: "Hotel Cecil guests included Senor Mariano Bertuchi",
    },
    {
      num: 16,
      source: "Al-Moghreb Al-Aksa, July 20th, 1901",
      text: "Hotel Cecil guests included J. De Burgh Galway (the Earl of Galway)",
    },
    {
      num: 17,
      source: "Al-Moghreb Al-Aksa, July 27th, 1901",
      text: "Hotel Cecil guests included Captain Cave and Captain K. Betty.",
    },
    {
      num: 18,
      source: "Al-Moghreb Al-Aksa, August 3rd, 1901",
      text: "Hotel Cecil guests included Captain Zarras and Major H. MacLear.",
    },
    {
      num: 19,
      source: "Al-Moghreb Al-Aksa, August 10th, 1901",
      text: "Hotel Cecil guests included Captain Whitloch and Major Rankin.",
    },
    {
      num: 20,
      source: "Al-Moghreb Al-Aksa, August 17th, 1901",
      text: "Hotel Cecil guests included Captain Gamble, Lieut. J. N. James, Lieut. Fanchawe, Lieut. Mortimer.",
    },
    {
      num: 21,
      source: "Al-Moghreb Al-Aksa, September 14th, 1901",
      text: "Hotel Cecil guests included Admiral Brent and the Chevalier Bossano.",
    },
    {
      num: 22,
      source: "Al-Moghreb Al-Aksa, November 16th, 1901",
      text: "Hotel Cecil guests included General Arsenio Linares.",
    },
    {
      num: 23,
      source: "Al-Moghreb Al-Aksa, December 21st, 1901",
      text: "Hotel Cecil guests included Mr. W. H. Apperley.",
    },
    {
      num: 24,
      source: "Al-Moghreb Al-Aksa, January 4th, 1902",
      text: '"General M. H. and Mrs. Nicholson arrived here from England, via Gibraltar, last Tuesday, and are staying in the Hotel Cecil."',
    },
    {
      num: 25,
      source: "Al-Moghreb Al-Aksa, February 22nd, 1901",
      text: "Hotel Cecil guests included General and Mrs. Nicholson, Captain Beresford, Colonel Campbell, Major General Grove.",
    },
    {
      num: 26,
      source: "Al-Moghreb Al-Aksa, March 22nd, 1901",
      text: "Hotel Cecil guests included Admiral Dowding and Captain Galloway.",
    },
    {
      num: 27,
      source: "Al-Moghreb Al-Aksa, June 14th, 1902",
      text: "Hotel Cecil guests included General W. Black, C.B., and Mrs. Black, Lieutenant R. Cooke, Major and Mrs. Rankin, Major, Royal Irish Fusiliers, and Mrs. Barclay.",
    },
    {
      num: 28,
      source: "Al-Moghreb Al-Aksa, July 19th 1902",
      text: '"Senor Marti, Spanish Consul at Gibraltar, arrived here on Tuesday, and is staying at the Hotel Cecil."',
    },
    {
      num: 29,
      source: "Al-Moghreb Al-Aksa, July 26th 1902",
      text: '"Major Crawford, D.A.A.G., Gibraltar, Surgeon Richards, R.N., and Mrs. Richards, and Mr. Joseph Gaggero, who have been staying at the Hotel Cecil, returned to Gibraltar by the S.S. Gibel Tarik on Monday."',
    },
    {
      num: 30,
      source: "Al-Moghreb Al-Aksa, August 2nd, 1902",
      text: "General and Mrs. Nicholson who have been staying here since the beginning of January at the Hotel Cecil, left on Monday morning by the S.S. Gibel Tarik, on their return to England. Major-General McGoun, late Madras Staff Corps, and the Reverend J. Hackett, Chaplain to the Forces, Gibraltar, arrived on Tuesday for a few days and are staying at the Hotel Cecil.”",
    },
    {
      num: 31,
      source: "Al-Moghreb Al-Aksa, August 9th, 1902",
      text: '"Mr. James M. S. Langerman, United States Vice Consul-General of America, and Commissioner General Louisiana Purchase Exposition (The St Louis World Fair), accompanied by Mrs. Langerman, arrived here last Thursday and are staying at the Hotel Cecil." The couple left Tangier September 20th.',
    },
    {
      num: 32,
      source: "Al-Moghreb Al-Aksa, August 23rd, 1902",
      text: '"A large number of Freemasons arrived this afternoon by the S.S. Gibel Tarik for the purpose of the consecration of a lodge S.C. at the Hotel Cecil."',
    },
    {
      num: 33,
      source: "Al-Moghreb Al-Aksa, September 20th",
      text: '"Mr J. Bennet, Chief of the Gibraltar Police, and Mrs. Bennet, arrived on Thursday afternoon by the S.S. Gibel Tarik, and are staying for a few days at the Hotel Cecil."',
    },
    {
      num: 34,
      source: "Al-Moghreb Al-Aksa, December 6th, 1902",
      text: '"Viscount and Viscountess de la Vega, arrived yesterday and are staying for a few days at the Hotel Cecil. . . Monsieur Hermand, French Electrical Engineer, who lately returned from Fez, is staying at the Hotel Cecil, and will shortly proceed to Rabat on commission to establish wireless telegraphy in this country”',
    },
    {
      num: 35,
      source: "Al-Moghreb Al-Aksa, December 20th, 1902",
      text: "“Mr James W. S. Langerman, United States Vice-Consul General, who is on a commission to the Sultan’ Court in connection with the Louisiana Purchase Exposition, 1904, was received by H.M. the Sultan on Monday evening the 8th. Inst. At the Shereefian Camp, near Fez, whence he was escorted by 20 horsemen expressly sent by the Sultan. . . January 3rd, 1903 “Mr. Langerman has been commissioned to obtain H.S. Majesty’s consent to have a proper exhibit of Moroccan products, arts, industry, etc., at the Louisiana Exhibition. We understand that Mr. Langerman is highly elated with the result of his mission and that he is quite confident of the final success of the Moroccan Section in the magnificent World’s Fair. January 10th, 1903: “Mr. James W. S. Langerman, Commissioner General for Morocco of the Louisiana International Exhibition, 1904, left yesterday for Europe, via Gibraltar, on his way to the United States. Having attained as complete a success in his mission to the Moorish Court as there is no precedent to record. Mr. Langerman may well return home quite satisfied, and feel confident that the final result of the Moorish Section in the St. Louis Exhibition will constitute the best foundation for future commerce between the United States and Morocco, thus strengthening the tides of friendship and cordial relations happily existing between the two countries. Mr. Langerman takes with him four beautiful Barbary horses he lately bought from Fez, three of which, with magnificent saddles, etc, were presented to him by H.M. the Sultan. ”",
    },
    {
      num: 36,
      source: "Al-Moghreb Al-Aksa, March 21st, 1903",
      text: '"Lord Teynham, Lady Teynham and The Honourable Miss Iris Dashwood, who were staying at the Hotel Cecil, left here last Monday by the S.S. Telde. Mr. S. L. Bensusan, the author of a number of interesting articles on Morocco, and the artist Mr. A. S. Forrest, arrived here on Thursday on a visit to Tangier, and are staying at the Hotel Cecil."',
    },
    {
      num: 37,
      source: "Al-Moghreb Al-Aksa, June 27th, 1903",
      text: '"Colonel R.J.F. Banfield, C.B., Assistant Adj. General Gibraltar, and Mrs. Banfield, arrived this afternoon from Gibraltar and are staying at the Hotel Cecil."',
    },
    {
      num: 38,
      source: "Al-Moghreb Al-Aksa, August 29th, 1903",
      text: '"Mr. A. Lavarello, Mr. J. de Costa Freire, Consul for Honduras and Mexico at Gibraltar, Mrs. Freire, Mr. Chas S. Rugeroni, Consul for the Argentine Republic, Mrs. Rugeroni, and family, arrived on Tuesday from Gibraltar, and are staying at the Hotel Cecil."',
    },
    {
      num: 39,
      source: "Al-Moghreb Al-Aksa, April 8th, 1905",
      text: '"Lady and the Misses Wilbraham and Lady Augusta Browne, arrived here on Tuesday from Gibraltar, and are staying at the Hotel Cecil."',
    },
    {
      num: 40,
      source: "Al-Moghreb Al-Aksa, April 22nd, 1905",
      text: '"Herr H. Tonnies, German Vice-Consul at Rabat, returned from leave to Europe this week, is staying in the Hotel Cecil, and shortly proceeding to his post."',
    },
    {
      num: 41,
      source: "Al-Moghreb Al-Aksa, May 27th, 1905",
      text: '"Mr. G. A. Prescott, Consul for Sweden and Norway in Gibraltar, paid a short visit to the city this week, staying in the Hotel Cecil."',
    },
    {
      num: 42,
      source: "Al-Moghreb Al-Aksa, June 24th, 1905",
      text: '"Commandant Sorela, Naval Attache to the Spanish Legation, accompanied by Senora Sorela and family, arrived on Tuesday and are staying at the Hotel Cecil."',
    },
    {
      num: 43,
      source: "Al-Moghreb Al-Aksa, August 26th, 1905",
      text: '"Major G .B. M. Rawlinson, and Captain W. E. I. Butler-Bowen, D.C.L. Inf., who have made a visit to this city and stayed in the Hotel Cecil, have left for Gibraltar."',
    },
    {
      num: 44,
      source: "Al-Moghreb Al-Aksa, September 16th 1905",
      text: "Mr. F. Robson, Colonial Clerk of Works, Gibraltar, and Mrs. Robson, came over on Thursday for a stay at the Hotel Cecil.”",
    },
    {
      num: 45,
      source: "Al-Moghreb Al-Aksa",
      text: "On December 2nd 1905 Dr. Collins, the Anglican Bishop of Gibraltar in Europe, arrived in Tangier to consecrate the recently completed St Andrew's church. Arriving aboard “His Majesty's Torpedo Boat, No.96” he was received at the port by the British Minister. The next day, according to AL- MOGHREB AL –AKSA, “His lordship in full vestments, with mitre, crozier, etc, attended by H.E. the British Minister, the Reverend J.A. Moore, and the churchwardens” performed the consecration ceremony and on the following afternoon the chaplain and Mrs. Moore held a formal “at home” in the Hotel Cecil in honour of the Bishop: “The Reverend and Mrs. Moore were at home at the Hotel Cecil on Monday afternoon when a large number of the British Community were invited to meet the Lord Bishop of Gibraltar. From 4.30 p.m. a constant stream of visitors arrived, everyone being evidently anxious to take the rare opportunity afforded them of meeting together. Mr. and Mrs. Moore, with the Bishop, received their guests in the drawing room, where each of them was introduced to his Lordship who charmed everyone with his kindly and gracious manner, and contributed so very much to the success and enjoyment of the afternoon.” Among the guests were the most significant figures in the British expatriate society, Lady Kirby-Green, widow of Sir William Kirby-Green, K.C.M.G., British Minister to Morocco (1886-1891), and her daughter Feridah Kirby-Green the Lanes, Taylors of Sultan’s Mill House, Taylors, the British Consul Mr. H.E. White and Mrs. White and Miss Ellen Winslow, who had settled in Tangier in 1887, was a founding member of Tangier British Library and of the Society for the Prevention of Cruelty to Animals, as well as a generous patron of a colony of liberated Moroccan slaves!",
    },
    {
      num: 46,
      source: "Al-Moghreb Al-Aksa, January 20th, 1906",
      text: '"Baroness and Miss Ungern-Sternberg, accompanied by Captain A Hedley-Garland, arrived this afternoon for a short stay at the Hotel Cecil. . . General R.F.J. Banfield, C.B., Brigadier-General of Administration at Gibraltar, and Lieutenant V. F. Banfield, the Welsh Regiment, arrived this afternoon and are staying in the Hotel Cecil."',
    },
    {
      num: 47,
      source: "Al-Moghreb Al-Aksa, February 10th 1906",
      text: '"Lady M. Wilbraham and Miss Hanson are staying at the Hotel Cecil as are Lieutenant M. Crawshay of the Worcestershire Regiment and Mr. Owen Crawshay."',
    },
    {
      num: 48,
      source: "Al-Moghreb Al-Aksa, March 31st, 1906",
      text: '"Mr. R. B. Cunninghame-Graham, and Mr. John Lavery, R.S.A., the distinguished painter arrived here on Tuesday from Algeciras, and are residing at the Hotel Cecil. These gentlemen are shortly proceeding on an excursion to Fez."',
    },
    {
      num: 49,
      source: "Al-Moghreb Al-Aksa, April 28th 1906",
      text: '"Baron and Baroness de Hortega, arrived this week at the Hotel Cecil, on a tour from Spain."',
    },
    {
      num: 50,
      source: "Al-Moghreb Al-Aksa, May 5th, 1906",
      text: '"Mr. R. B. Cunninghame-Graham, and Mr. John Lavery, R.S.A., came back from Fez this afternoon, and are staying at the Hotel Cecil."',
    },
    {
      num: 51,
      source: "Al-Moghreb Al-Aksa, September 29th, 1906",
      text: '"The Baroness Dobrzenski, who made a stay at the Hotel Cecil, left last week for Austria."',
    },
    {
      num: 52,
      source: "Al-Moghreb Al-Aksa, December 29th, 1906",
      text: '"The Hon. W. Burke Cochran, Member of Congress, U.S.A., and Mrs. Cochran arrived from Gibraltar on Thursday, and are staying at the Hotel Cecil."',
    },
    {
      num: 53,
      source: "Al-Moghreb Al-Aksa, February 7th, 1907",
      text: '"The Marchioness de Sain, and Miss Phillimore of London, arrived from Gibraltar this afternoon and are staying in the Hotel Cecil. The Countess de Revenel, of Paris, arrived from Gibraltar on Tuesday and is staying in the Hotel Cecil"',
    },
    {
      num: 54,
      source: "Al-Moghreb Al-Aksa, March 9th, 1907",
      text: '"General Sir Reginald Gipps, G.C. B., and Lady Gipps, of London, are staying at the Hotel Cecil."',
    },
    {
      num: 55,
      source: "Al-Moghreb Al-Aksa, April 6th, 1907",
      text: '"Her Royal Highness Princess Margaret Mathilde sister of His Majesty the King of Saxony, and suite, arrived this morning from Seville, via Algeciras, for a short stay at the Hotel Cecil. Her Royal Highness was received at the pier by H.E. Dr. Rosen, German Minister, and other members of the German Legation.',
    },
    {
      num: 56,
      source: "Al-Moghreb Al-Aksa, April 13th, 1907",
      text: '"Her Highness Princess Schronburg of Saxony and Miss E. M. James arrived on Tuesday from Gibraltar and are staying at the Hotel Cecil."',
    },
    {
      num: 57,
      source: "Al-Moghreb Al-Aksa, April 20th, 1907",
      text: '"The Marques de Lierta, of Madrid, and the Conde del Fresno, of Seville, made a short stay at the Hotel Cecil this week."',
    },
    {
      num: 58,
      source: "Al-Moghreb Al-Aksa, May 4th, 1907",
      text: '"The Marques and Marquessa de Almodovar, of Jerez, and Senor and Senora de Moxo, were visitors at the Hotel Cecil this week. Her Highness Princess Schronburg, who has made a prolonged stay at the Hotel Cecil, left this afternoon by the Deutsche Ost-Afrika liner Prinzregent, for Hamburg."',
    },
    {
      num: 59,
      source: "Al-Moghreb Al-Aksa, November 23rd, 1907",
      text: '"Baron and Baroness de Vos van Steenwyk arrived this afternoon and are staying in the Hotel Cecil."',
    },
    {
      num: 60,
      source: "Al-Moghreb Al-Aksa, February 22nd, 1908",
      text: 'General Sir Wilsone Black, K.C.B., and Lady Black, arrived this afternoon, on a visit to this city, and are staying in the Hotel Cecil."',
    },
    {
      num: 61,
      source: "Al-Moghreb Al-Aksa, May 2nd, 1908",
      text: '"His Excellency the Duque de Tovar, formerly Spanish Ambassador to the Vatican, and Don Miguel Villaneuva, ex-minister of the Crown, arrived at the Hotel Cecil on Wednesday, and left yesterday for Ceuta and Melilla on a cruise aboard the S.S. Pielago."',
    },
    {
      num: 62,
      source: "Al-Moghreb Al-Aksa, May 9th, 1908",
      text: '"Baron de Bartouch, of Denmark, who has been away for some years, arrived on Wednesday and is staying at the Hotel Cecil."',
    },
    {
      num: 63,
      source: "Al-Moghreb Al-Aksa, May 16th, 1908",
      text: '"Lt. Colonel Little, Chief Administrator Staff Officer, Gibraltar, Mrs. Little, Major E. M. Comyn, R.G.A., Mrs. Comyn, Major W. Howell Jones, R.G.A., Mrs. Jones, arrived at the Hotel Cecil today for a short stay."',
    },
    {
      num: 64,
      source: "Al-Moghreb Al-Aksa, June 20th, 1908",
      text: '"Baron de Bartuch, who made a few weeks stay at the Hotel Cecil, left last Saturday for the Canary Islands."',
    },
    {
      num: 65,
      source: "TANGER GAZETTE, January 6th, 1923",
      text: "Guests at the Hotel Cecil included Lt. Colonel Ellis.",
    },
    {
      num: 66,
      source: "TANGER GAZETTE, January 20th, 1923",
      text: "Guests at the Hotel Cecil included Lord Crighton Stuart, M.P., the Earl of Selborne, the Countess of Selborne.",
    },
    {
      num: 67,
      source: "TANGER GAZETTE, February 10th, 1923",
      text: "Guests at the Hotel Cecil included General Gomez Jordana and Senora Jordana, and His Excellency the Marques de Hara.",
    },
    {
      num: 68,
      source: "TANGER GAZETTE, March 3rd, 1923",
      text: "Guests at the Hotel Cecil included His Excellency Comendator and Mrs. Brambilla, Diplomatic Agent for Italy, General Martinez Anido and Commandant de la Bier.",
    },
    {
      num: 69,
      source: "TANGER GAZETTE, March 10th, 1923",
      text: "Guests at the Hotel Cecil included Vice-Admiral Sir Hugh and Lady Toothill, The Hon. Mrs. Jorcey, Colonel Wilson, D.S.O.",
    },
    {
      num: 70,
      source: "TANGER GAZETTE, March 17th, 1923",
      text: "Guests at the Hotel Cecil included the Comtesse de Villeneuve Bergessen, the Comtesse de Menace, Lt. Colonel E. A. R. Newman.",
    },
    {
      num: 71,
      source: "TANGER GAZETTE, March 24th, 1923",
      text: "Guests at the Hotel Cecil included Colonel Sir William and Lady Smith.",
    },
    {
      num: 72,
      source: "TANGER GAZETTE, March 31st, 1923",
      text: "Guests at the Hotel Cecil included the Marques Lazengren and the Marquis Geo de Lazengren (sic).",
    },
    {
      num: 73,
      source: "TANGER GAZETTE, April 14th, 1923",
      text: "Guests at the Hotel Cecil included the Marquis and Marquise Crequi-Montford.",
    },
    {
      num: 74,
      source: "TANGER GAZETTE, April 21st, 1923",
      text: "Guests at the Hotel Cecil included le Comte and Comtesse de San Luis.",
    },
    {
      num: 75,
      source: "TANGER GAZETTE, May 5th, 1923",
      text: "Guests at the Hotel Cecil included le Comtesse de Villeneuve, and Admiral E. Reeves and party.",
    },
    {
      num: 76,
      source: "TANGER GAZETTE, June 23rd, 1923",
      text: "Guests included the Baron de Burjania. In the same edition an un-illustrated advertisement: “The Cecil Hotel, Tanger, Morocco, Telegraphic Address: CECIL. This first class Modern Hotel, built expressly for the purpose, is situated in its own grounds on the grand beach, five minutes walk from the pier, in the centre of the new town, and has splendid views of the straits and surrounding countryside. Commodious and well ventilated rooms with the latest sanitary arrangements. Suites of rooms with private bath, toilet and W.C. Spacious Dining, Drawing, Reading and Billiard Rooms. Electric light throughout. Bath rooms on every floor. Large terraces, kiosk, lawn tennis court, roller skating and garden. Excellent cuisine and choice wines. Interpreters and experienced guides. Motor-bus meets all steamers. The Manager.”",
    },
    {
      num: 77,
      source: "TANGER GAZETTE, October 13th, 1923",
      text: '"Members of the committee of the British Chamber of Commerce called at the Hotel Cecil on Monday to say farewell to Colonel MacKerath (British Consul, Fez), to thank him for all that he had done for the British interests and the British colony, and to wish all future success and happiness to him and Mrs. MacKerath."',
    },
    {
      num: 78,
      source: "TANGER GAZETTE, December 22nd 1923",
      text: "Last advertisement for the Hotel Cecil.",
    },
    {
      num: 79,
      source: "TANGER GAZETTE, January 19th, 1924",
      text: "Guests at the Hotel Cecil included Colonel, Mrs. And Master Scott, Major and Mrs. Penrose, Captain Anderson, Commander A. Abbay, Lieut. L. C. Sharman, Monseigneurs Lumbroso and Pappalardo, Mr. and Mrs. Driscoll, Vice-Consul, U.S.A., Mr. and Mrs. Murphy, Consul, U.S.A., COLONEL AND MRS. ELLIS, Captain Wright.",
    },
    {
      num: 80,
      source: "TANGER GAZETTE, January 26th, 1924",
      text: "Guests at the Hotel Cecil included Sir Cosmo Duff-Gordon.",
    },
    {
      num: 81,
      source: "TANGER GAZETTE, February 2nd, 1924",
      text: "Guests at the Hotel Cecil included Prince Charles MURAT, the Conde de Albis and the Comte de Pomereu.",
    },
    {
      num: 82,
      source: "TANGER GAZETTE, February 23rd, 1924",
      text: "Guests at the Hotel Cecil included Lord Killanin, Viscount Peel, and the Conde de Barbate.",
    },
    {
      num: 83,
      source: "TANGER GAZETTE, March 1st, 1924",
      text: "Guests at the Hotel Cecil included Admiral Sir Reginald and Lady Hall, Lt.Commander and Mrs. Cornwallis, and Colonel Huot.",
    },
    {
      num: 84,
      source: "TANGER GAZETTE, March 8th, 1924",
      text: "Guests at the Hotel Cecil included Lady Malmesbury and Lady Elizabeth Harris.",
    },
    {
      num: 85,
      source: "TANGER GAZETTE, March 15th, 1924",
      text: "Guests at the Hotel Cecil included The Rt. Hon. the Earl of Airlie, Brigadier General E. Rudkin, Lt. Commander Franks, the Marquis de Mos and the Comte and Comtesse de Harcourt.",
    },
    {
      num: 86,
      source: "TANGER GAZETTE, March 29th, 1924",
      text: "Guests at the Hotel Cecil included General Sir Charles C. Munro, Lady Munro, Lady de Robeck, Major the Hon. M. Baring, Lieutenant G. H. MacCarthy and Colonel G. B. Wilson.",
    },
    {
      num: 87,
      source: "TANGER GAZETTE, April 19th, 1924",
      text: "Guests at the hotel Cecil included H.E. Mr. Dearing, American Ambassador to Lisbon, and Mrs. Dearing, and Lady Mathew.",
    },
    {
      num: 88,
      source: "TANGER GAZETTE, May 10th, 1924",
      text: "Guests at the Hotel Cecil included the Conde de Lieyva, the Marques de Pontejos, and Major Ramsay.",
    },
    {
      num: 89,
      source: "TANGER GAZETTE, June 21st, 1924",
      text: "Guests at the hotel Cecil included Barons de Brichanvant, Hesent, Larnbea.",
    },
    {
      num: 90,
      source: "TANGER GAZETTE, July 26th, 1924",
      text: "Guests at the hotel Cecil included Baron and Baroness de Aersen Beyeren.",
    },
    {
      num: 91,
      source: "TANGER GAZETTE, October 25th, 1924",
      text: "Guests at the Hotel Cecil included General Nicholas and family.",
    },
    {
      num: 92,
      source: "TANGER GAZETTE, November 1st, 1924",
      text: "Guests at the Hotel Cecil included Kaid Ermiki and followers.",
    },
    {
      num: 93,
      source: "TANGER GAZETTE, December 13th, 1924",
      text: "Guests at the Hotel Cecil included Colonel R. G. Coles, Captains E. Hughes and R. B. Oakes.",
    },
    {
      num: 94,
      source: "TANGER GAZETTE, December 20th, 1924",
      text: "Guests at the Hotel Cecil included Archdeacon and Mrs. Buckton, Lt. Commander and Mrs. C. Harcourt.",
    },
    {
      num: 95,
      source: "TANGER GAZETTE, December 27th, 1924",
      text: "“The excellent fare offered by the Hotel Cecil on Christmas Day encouraged several people to give dinner parties there. Over 60 guests finally sat down to dinner which was accompanied by much laughter and fun. The evening ended with a dance which was very well attended and much enjoyed. The Hotel was splendidly decorated and the large fires and tastefully shaded lights helped to produce a very charming effect.”",
    },
    {
      num: 96,
      source: "TANGER GAZETTE, February 15th, 1930",
      text: "THE DRAG HOUNDS: “The Drag hounds met on Tuesday at the Menebhi farm and there was a good run. The next meet will be on Wednesday 19th at the Hotel Cecil and a second meet on Saturday 22nd.”",
    },
    {
      num: 97,
      source: "TANGER GAZETTE, April 5th, 1930",
      text: "THE HUNT BALL: “Last Tuesday night at the Cecil Hotel a Hunt Ball was given as a coming out party of the newly formed Hunt Club, and partly as a means for collecting funds for the maintenance of the Tangier Hounds, which have hitherto been supported by private subscription only. The drawing room of the Hotel was cleared for dancing, and as was most appropriate, hung with bridles, polo sticks, etc., and a few saddles were variously disposed about the room. Music was dispensed by a string orchestra who played extraordinarily well, not only the Fox Trot and Waltzes, but also Paul Jones and Strip the Willow, both of which dances proved to be very good fun and greatly enjoyed. An appetizing selection of cakes and sandwiches were laid out in the dining room with cup of two kinds to wash them down. The ball finished at One, rather an early hour seemingly for Tangier, but this time was fixed out of consideration for those who were going out to the pigsticking camp on the following day. A most successful show and very well attended by the English colony as well as certain officers from the H.M.S. Tourmaline and H.M.S. Splendid anchored in the bay.”",
    },
    {
      num: 98,
      source: "TANGER GAZETTE, April 5th 1930",
      text: "First Advertisement for the Hotel El Minzah.",
    },
    {
      num: 99,
      source: "TANGER GAZETTE, October 18th 1930",
      text: "“MR. O’BRIEN LEAVES, It is with great regret that we hear that Mr. and Mrs. O’Brien are leaving the Cecil Hotel this week. Mrs. O’Brien has for so many years done so much to make the Hotel a success that it will require a strong personality to retain the position. We understand that Senor Don Marchena is to act as director, La Senora Marchena being the heiress of the late Mr. Eugene Chapory.”",
    },
    {
      num: 100,
      source: "TANGER GAZETTE, December 2Oth 1930",
      text: "Official Opening of the Hotel El Minzah.",
    },
    {
      num: 101,
      source: "TANGER GAZETTE, January 3rd 1931",
      text: "“NEW YEAR’S EVE: Numerous dinners were held to welcome the New Year in. The Hotel El Minzah and the Villa de France were both the seat of several parties which were followed by a dance at the Minzah . . .”",
    },
    {
      num: 102,
      source: "TANGER GAZETTE, February 14th, 1930",
      text: "The Tangier Gazette commences publication of the guest lists of the Hotels Minzah and De France.",
    },
    {
      num: 103,
      source: "TANGER GAZETTE, January 16th 1932",
      text: "“THE TANGIER HUNT BALL, took place in the beautiful ballroom of the Hotel Villa Valentina on Tuesday, 12th January and was a great success. Between seventy and eighty people attened, and the net profit amounted to Frances 885.00”",
    },
    {
      num: 104,
      source: "TANGER GAZETTE, February 6th, 1932",
      text: "The Tangier Gazette starts to publish Guest Lists for The Hotels El Minzah, Villa de France, and Villa Valentina.",
    },
    {
      num: 105,
      source: "TANGER GAZETTE, March 12th, 1932",
      text: "“GRAND HOTEL VALENTINA, A First Class All-British Hotel, Management Mr. and Mrs. T. Q. O’Brien, Thoroughly Modernised, All Bedrooms Fitted Hot and Cold Water, Rooms with Private Baths, Self-contained suites, Moorish and English Lounges, Card Room, Large Terrace, Sheltered Garden, Billiards, Ball Room, Ping Pong, Tennis, The Most Attractive American Bar in Moroco, Excellent Quisine served in spacious restaurant, Open to Non-Residents.”",
    },
    {
      num: 106,
      source: "TANGER GAZETTE, April 23rd 1932",
      text: "“A Dance was given in aid of the funds for the Peoples Dispensary for Sick Animals at the Hotel Valentina on the 14th instant. It was a great success and much enjoyed by all those present. . . The Committee of the P.D.S.A. desire to record their warmest thanks to Mrs. O’Brien who organized matters so excellently.”",
    },
    {
      num: 107,
      source: "TANGER GAZETTE, November 25th, 1932",
      text: "British WOMEN’S ASSOCIATION, A theatrical entertainment will be given on Wednesday, December 7th at 5p.m. in the Hotel Villa Valentina.”",
    },
    {
      num: 108,
      source: "TANGER GAZETTE, December 16th, 1932",
      text: "“TANGIER FRIENDS OF MUSIC, the monthly concert will take place next Monday, December 19th, at 6p.m. in the salons of the Hotel Villa Valentina.”",
    },
    {
      num: 109,
      source: "TANGER GAZETTE, December 30th, 1932",
      text: "“BRITISH WOMEN’S ASSOCIATION, on Friday, January 6th there will be a children’s’ party at the Hotel Villa Valentina, tea 4p.m. Members may bring their families.”",
    },
    {
      num: 110,
      source: "TANGER GAZETTE, December 30th, 1932",
      text: "A MOST SUCCESSFUL DANCE AT THE HOTEL VILLA VALENTINA. A most successful dance was given at the Hotel Villa Valentina last Monday night, Boxing Day, by the popular management, Mr. and Mrs. T.G. O’Brien. The guests, who were many, came early and stayed late, and there was a general consensus of opinion that not for many a long day had a jollier show been held in Tangier. A great proportion of this successful evening was due to the indefatigable efforts of Mr. Henry Owen, who acted as Master of Ceremonies, and whose constantly announced new plans of amusement – kept the ball rolling and never let it stop. Mr. Owen was also mainly responsible for the charming decorations, and in this task he was adequately assisted by Mr. A. W. Barmby.”",
    },
    {
      num: 111,
      source: "TANGER GAZETTE, January 27th, 1933",
      text: "OVERSEAS LEAGUE, Mr. Eric Rice, Assistant Secretary of the Overseas League, cordially invites all members in Tangier, and other British residents, who will be interested, to an informal party at the Valentina Hotel, Monday, January 30th, 6p.m.”",
    },
    {
      num: 112,
      source: "TANGER GAZETTE, March 10th, 1933",
      text: "DANCE, there will be a dance in the ball room of the Hotel Villa Valentina on Saturday night. By Kind permission of Rear-Admiral James, the band of H.M.S. Hood will play. Admission is by invitation only.”",
    },
    {
      num: 113,
      source: "TANGER GAZETTE, June 30th, 1933",
      text: "EXHIBITION OF PAINTINGS, Monsieur Darvas, a young artist of remarkable talent, is giving an interesting exhibition of his paintings of North African types and scenes in Monsieur Marcel Levy’s Art Gallery, in El Minzah building.” Same edition “Margaret Sexty, Ladies Hairdresser, Hotel Villa de France, makes a special offer for one month only, permanent wave, One Pound One Shilling. The latest and best permanent waving.”",
    },
    {
      num: 114,
      source: "TANGER GAZETTE, July 28th, 1933",
      text: "AN EXHIBITION OF PORTRAITS that will repay a visit is now being held in the Levy Galleries, El Minzah buildings. The painter is Mr. Alfred Szwendowski who began his artistic career by studing in Moscow at Count Stroganoff’s Academy of Art.",
    },
    {
      num: 115,
      source: "TANGER GAZETTE, October 13th, 1933",
      text: "THE TAIL-WAGGERS’ CLUB, we are informed that the Tail-Waggers’ Club has already passed the half million mark on the British Register. But there still exist another 3 million dogs in Great Britain that have not yet joined the Club. We wonder how many Tail-Waggers there are in Tangier? Mrs. O’Brien, the popular manageress of the Hotel Villa Valentina, has the distinction of her dog Ju Ju, bearing the sign no.1 on its medal. The subscription to the Tail-Waggers’ Club is half a crown per annum per dog. Subscriptions may be sent to Mrs. O’Brien, c/o the Hotel Villa Valentina.” Same edition “MOORISH DINNER, a Moorish dinner was given last Saturday night, October 7th, by the Management of the Hotel Villa Valentina to their guests in the hotel’s beautiful ballroom. Nearly 60 persons took their seats – some with difficulty, for it is not easy to sit cross-legged when one has passed the first flush of youth. The ballroom had been tastefully arranged by Mrs. O’Brien with long divans having in front of them low tables on which the Moorish food was served. . . An additional touch of colour was given to an already bright and animated scene by the presence of a Moorish maiden in all her resplendent robes. The dinner was followed by a dance in the same ballroom, and the whole night’s entertainment was voted by all those present to be a great success.”",
    },
    {
      num: 116,
      source: "TANGER GAZETTE, January 26th, 1934",
      text: "SUNDAY TEA DANCE AT EL MINZAH, The management of the Hotel El Minzah Hotel are to be congratulated upon the great success of their Tea Dances which are held each Sunday afternoon from 4.30p.M to 7.30p.m.. The charge, including tea, is Francs 15 for the ordinary public and Francs 10 for visitors staying at the El Minzah or Villa de France Hotels.”",
    },
    {
      num: 117,
      source: "TANGER GAZETTE, February 2nd, 1934",
      text: "BRITISH RESIDENTS ASSOCIATION, The Annual Meeting of the British Residents’ Association was held at the Hotel Valentina on Tuesday 30th instant with Mr. J. H. Sinclair, C.M.G., in the Chair. . . The meeting was followed by a thé dansant in the Ball Room of the hotel which was attended by many members of the Association and their friends, while a goodly number proceeded to the Card Room, which had been thrown open for the occasion. The catering was in the excellent hands of Mr. E. Posso, the Manager of the Hotel Villa Valentina.”",
    },
    {
      num: 118,
      source: "TANGER GAZETTE, February 9th, 1934",
      text: "HOTEL VILLA DE FRANCE, we hear that Mr. and Mrs. T. Q. O’Brien are taking over today, February 9th, the management of the Hotel Villa de France.”",
    },
  ];

  const filteredFootnotes = footnotes.filter(
    (fn) => searchFootnote === "" || fn.num.toString() === searchFootnote
  );

  return (
    <section id="appendix" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-amber-600 px-6 py-2 mb-6">
            <p className="text-amber-600 tracking-[0.3em] text-sm">
              APPENDIX ONE
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            The Guest Register & Historical Records
          </h2>
          <p className="text-gray-500 italic max-w-3xl mx-auto">
            A comprehensive compilation from Al-Moghreb Al-Aksa (1899-1908) and
            The Tangier Gazette (1923-1934)
          </p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-600 p-8 mb-12">
          <p className="text-gray-700 leading-relaxed">
            The following lists have been extracted from references published in{" "}
            <span className="italic">AL-MOGHREB AL-AKSA</span> between the
            opening of the Hotel Cecil in 1899 and 1908, and from{" "}
            <span className="italic">THE TANGIER GAZETTE</span> between
            1923-1924 and 1930-1934.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("register")}
            className={`px-4 md:px-6 py-4 flex items-center gap-2 transition-colors border-b-2 text-sm md:text-base ${
              activeTab === "register"
                ? "border-amber-600 text-amber-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Book size={20} />
            <span>Guest Register</span>
          </button>
          <button
            onClick={() => setActiveTab("extracts")}
            className={`px-4 md:px-6 py-4 flex items-center gap-2 transition-colors border-b-2 text-sm md:text-base ${
              activeTab === "extracts"
                ? "border-amber-600 text-amber-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <FileText size={20} />
            <span className="hidden sm:inline">Newspaper Extracts</span>
            <span className="sm:hidden">Extracts</span>
          </button>
          <button
            onClick={() => setActiveTab("footnotes")}
            className={`px-4 md:px-6 py-4 flex items-center gap-2 transition-colors border-b-2 text-sm md:text-base ${
              activeTab === "footnotes"
                ? "border-amber-600 text-amber-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Hash size={20} />
            <span>Footnotes</span>
          </button>
          <button
            onClick={() => setActiveTab("bibliography")}
            className={`px-4 md:px-6 py-4 flex items-center gap-2 transition-colors border-b-2 text-sm md:text-base ${
              activeTab === "bibliography"
                ? "border-amber-600 text-amber-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Library size={20} />
            <span>Bibliography</span>
          </button>
        </div>

        {/* Guest Register Tab */}
        {activeTab === "register" && (
          <div className="space-y-6">
            {Object.entries(guestData).map(([category, guests]) => (
              <div
                key={category}
                className="bg-white border border-gray-200 shadow-sm"
              >
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category ? null : category
                    )
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl text-amber-600">{category}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">
                      {guests.length} guests
                    </span>
                    {expandedCategory === category ? (
                      <ChevronUp className="text-gray-400" />
                    ) : (
                      <ChevronDown className="text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedCategory === category && (
                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm text-gray-700">
                              Name
                            </th>
                            <th className="px-4 py-3 text-left text-sm text-gray-700">
                              Year
                            </th>
                            <th className="px-4 py-3 text-left text-sm text-gray-700">
                              Footnote
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {guests.map((guest, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-900">
                                {guest.name}
                              </td>
                              <td className="px-4 py-3 text-gray-600">
                                {guest.year}
                              </td>
                              <td className="px-4 py-3 text-gray-600 text-sm">
                                {guest.footnote}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Newspaper Extracts Tab */}
        {activeTab === "extracts" && (
          <div className="space-y-8">
            <div className="bg-gray-900 text-white p-8">
              <h3 className="text-2xl text-amber-400 mb-4">
                Extracts from Al-Moghreb Al-Aksa, 1883–1908
              </h3>
              <p className="text-gray-300">
                These extracts provide contemporary accounts of the Hotel
                Cecil's guests and events, offering invaluable insights into the
                social life of Tangier during the Belle Époque.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white border border-gray-200 p-6 mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">February 25th, 1899:</span>
                </p>
                <p className="text-gray-700 italic">
                  "The inauguration of the Hotel Cecil, situated on the beach,
                  took place on Saturday evening. The building which was
                  formerly occupied by Senor Recio's Universal Hotel has been
                  thoroughly reconstructed, and the newly fitted hotel is under
                  the able management of Mr. John Saccone."
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">April 1st, 1900:</span>
                </p>
                <p className="text-gray-700 italic">
                  "Prince Henri d'Orleans arrived here from Tunis and Oran on
                  Wednesday, and is staying at the Hotel Cecil."
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">June 15th, 1901:</span>
                </p>
                <p className="text-gray-700 italic">
                  "On Monday night a 'punch d'honneur' was offered at the Hotel
                  Cecil by the French residents to His Excellency Monsieur
                  Révoil (the French Ambassador), which was also attended by
                  Rear-Admiral Caillard, the officers of the two French cruisers
                  in port, and the personnel of the French legation. The kiosk
                  of the Hotel Cecil, were the refreshment was served, was
                  decorated with French flags, flowers and green foliage, and
                  the band of the cruiser Pothau played at intervals."
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">August 23rd, 1902:</span>
                </p>
                <p className="text-gray-700 italic">
                  "A large number of Freemasons arrived this afternoon by the
                  S.S. Gibel Tarik for the purpose of the consecration of a
                  lodge S.C. at the Hotel Cecil."
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">December 2nd, 1905:</span>
                </p>
                <p className="text-gray-700 italic">
                  "The Reverend and Mrs. Moore were at home at the Hotel Cecil
                  on Monday afternoon when a large number of the British
                  Community were invited to meet the Lord Bishop of Gibraltar.
                  From 4.30 p.m. a constant stream of visitors arrived, everyone
                  being evidently anxious to take the rare opportunity afforded
                  them of meeting together."
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">April 6th, 1907:</span>
                </p>
                <p className="text-gray-700 italic">
                  "Her Royal Highness Princess Margaret Mathilde sister of His
                  Majesty the King of Saxony, and suite, arrived this morning
                  from Seville, via Algeciras, for a short stay at the Hotel
                  Cecil. Her Royal Highness was received at the pier by H.E. Dr.
                  Rosen, German Minister, and other members of the German
                  Legation."
                </p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 mt-8">
              <h3 className="text-2xl text-amber-400 mb-4">
                Extracts from The Tangier Gazette, 1923–1934
              </h3>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white border border-gray-200 p-6 mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">December 27th, 1924:</span>
                </p>
                <p className="text-gray-700 italic">
                  "The excellent fare offered by the Hotel Cecil on Christmas
                  Day encouraged several people to give dinner parties there.
                  Over 60 guests finally sat down to dinner which was
                  accompanied by much laughter and fun. The evening ended with a
                  dance which was very well attended and much enjoyed."
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">April 5th, 1930:</span>
                </p>
                <p className="text-gray-700 italic">
                  "Last Tuesday night at the Cecil Hotel a Hunt Ball was given
                  as a coming out party of the newly formed Hunt Club... The
                  drawing room of the Hotel was cleared for dancing, and as was
                  most appropriate, hung with bridles, polo sticks, etc., and a
                  few saddles were variously disposed about the room."
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">October 18th, 1930:</span>
                </p>
                <p className="text-gray-700 italic">
                  "It is with great regret that we hear that Mr. and Mrs.
                  O'Brien are leaving the Cecil Hotel this week. Mrs. O'Brien
                  has for so many years done so much to make the Hotel a success
                  that it will require a strong personality to retain the
                  position."
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Note:</span>
                </p>
                <p className="text-gray-700">
                  After December 1935, searches of The Tangier Gazette for
                  sample years 1940, 1945, 1950, and 1955 found nothing
                  referring to the Hotel Cecil. The hotel had effectively
                  disappeared from Tangier society.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footnotes Tab */}
        {activeTab === "footnotes" && (
          <div className="space-y-6">
            <div className="bg-gray-900 text-white p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl text-amber-400 mb-2">Footnotes</h3>
                  <p className="text-gray-300">
                    Complete reference notes cited throughout the book
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Search by number..."
                    value={searchFootnote}
                    onChange={(e) => setSearchFootnote(e.target.value)}
                    className="px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600 italic px-4">
              Showing {filteredFootnotes.length} of {footnotes.length} footnotes
            </div>

            <div className="space-y-4">
              {filteredFootnotes.slice(0, 8).map((footnote) => (
                <div
                  key={footnote.num}
                  className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center">
                        <span className="text-lg">{footnote.num}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-amber-600 mb-2 uppercase tracking-wide">
                        {footnote.source}
                      </p>
                      <p className="text-gray-700 leading-relaxed italic">
                        {footnote.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-8 mt-8">
              <p className="text-gray-700">
                <span className="font-semibold">Note:</span> Due to space
                constraints, only a selection of footnotes is displayed here.
                The complete set of 118 footnotes documenting every reference
                from Al-Moghreb Al-Aksa (1883-1908) and The Tangier Gazette
                (1923-1934) provides comprehensive source material for this
                social history.
              </p>
            </div>
          </div>
        )}

        {/* Bibliography Tab */}
        {activeTab === "bibliography" && (
          <div className="space-y-8">
            <div className="bg-gray-900 text-white p-8">
              <h3 className="text-2xl text-amber-400 mb-4">Bibliography</h3>
              <p className="text-gray-300">
                Sources consulted in the preparation of this social history
              </p>
            </div>

            <div>
              <h4 className="text-xl text-amber-600 mb-4 pb-2 border-b border-gray-200">
                Books and Monographs
              </h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  Abensur, Philip,{" "}
                  <span className="italic">
                    Tanger entre Orient et Occident
                  </span>
                  , 2009.
                </p>
                <p>
                  Clandermond, Andrew & MacCarthy, Dr. Terence,{" "}
                  <span className="italic">
                    A Dictionary of Painters in Tangier, 1669-2003
                  </span>
                  , The Lawrence-Arnott Gallery, Tangier, 2003.
                </p>
                <p>
                  Clandermond, The Count of,{" "}
                  <span className="italic">Tangier Bookplates</span>, The Black
                  Eagle Press, Co. Antrim, 1998.
                </p>
                <p>
                  Eldridge, Mona,{" "}
                  <span className="italic">In Search of a Prince</span>,
                  Sidgwick & Jackson, London, 1988.
                </p>
                <p>
                  Finlayson, lain,{" "}
                  <span className="italic">Tangier, City of the Dream</span>,
                  Harper-Collins, London, 1992.
                </p>
                <p>
                  Harris, Walter, <span className="italic">East Again</span>,
                  Thornton & Butterworth, London, 1933.
                </p>
                <p>
                  Harris, Walter,{" "}
                  <span className="italic">Morocco That Was</span>, Eland,
                  London, 2000.
                </p>
                <p>
                  Harter, Hugh,{" "}
                  <span className="italic">Tangier And All That</span>,
                  Passeggiata Press, Pueblo, CO., 1996.
                </p>
                <p>
                  Herbert, The Honourable David,{" "}
                  <span className="italic">Second Son</span>, Peter Owen Ltd.,
                  London. 1972.
                </p>
                <p>
                  Hopkins, John,{" "}
                  <span className="italic">The Tangier Diaries, 1962-1979</span>
                  , Arcadia Books, London, 1997.
                </p>
                <p>
                  Laredo, Isaac,{" "}
                  <span className="italic">Memorias de Un Viejo Tangerino</span>
                  , Editions la Porte, 1994.
                </p>
                <p>
                  Meakin, Budgett,{" "}
                  <span className="italic">The Moorish Empire</span>, Swan
                  Sonnenschein & Co., London, 1899.
                </p>
                <p>
                  Pleydell, Kathleen Mansel,{" "}
                  <span className="italic">Sketches of Life in Morocco</span>,
                  Digby, Long & Co., London, 1907.
                </p>
                <p>
                  Stuart, Graham H.,{" "}
                  <span className="italic">
                    The International City of Tangier
                  </span>
                  , Stanford University Press, California, 1931.
                </p>
                <p>
                  Tafersiti, Rachid,{" "}
                  <span className="italic">Tanger, Realites d'un Mythe</span>,
                  Tangier, 1998.
                </p>
                <p>
                  Winter, Bert & Mabel,{" "}
                  <span className="italic">The Rogues Guide to Tangier</span>,
                  Knockmuldowney Press, Ireland, 1986.
                </p>
                <p>
                  Woolman, David,{" "}
                  <span className="italic">
                    Stars in the Firmament, Tangier Characters 1660-1960
                  </span>
                  , Passeggiata Press, Pueblo, CO., U.S.A., 1998.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl text-amber-600 mb-4 pb-2 border-b border-gray-200">
                Reference Works
              </h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="italic">Burke's Irish Family Records</span>,
                  1976.
                </p>
                <p>
                  <span className="italic">
                    Burke's Landed Gentry of Ireland
                  </span>
                  , 1912.
                </p>
                <p>
                  <span className="italic">
                    Burke's Peerage, Baronetage & Knightage
                  </span>
                  , 1970.
                </p>
                <p>
                  <span className="italic">
                    The Concise Dictionary of National Biography
                  </span>
                  , 1901-1970.
                </p>
                <p>
                  <span className="italic">
                    Debrett's Peerage, Baronetage, Knightage and Companionage
                  </span>
                  , 1935 & 1950.
                </p>
                <p>
                  <span className="italic">
                    The Dictionary of National Biography
                  </span>
                  , 1903.
                </p>
                <p>
                  <span className="italic">Livre D'Or du Maroc</span>,
                  1934-1935.
                </p>
                <p>
                  <span className="italic">Tangier – A Practical Guide</span>,
                  1948.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl text-amber-600 mb-4 pb-2 border-b border-gray-200">
                Journals and Newspapers
              </h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="italic">Al-Moghreb Al-Aksa</span>, 1883-1908.
                </p>
                <p>
                  <span className="italic">Tangier Gazette</span>, 1923-1935,
                  1940, 1945, 1950, 1955.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-amber-50 border-l-4 border-amber-600 p-8">
              <p className="text-gray-700 italic">
                This comprehensive bibliography reflects the extensive archival
                research undertaken by the authors over more than a decade,
                drawing on both primary sources and contemporary accounts to
                reconstruct the social history of the Hotel Cecil.
              </p>
            </div>
          </div>
        )}

        <div className="mt-16 text-center bg-gray-900 text-white p-12">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            This appendix represents the culmination of years of meticulous
            research through newspaper archives, private collections, and
            historical records. The Hotel Cecil's story has been pieced together
            from hundreds of fragmentary references, bringing back to life an
            institution that once stood at the very heart of Tangier society.
          </p>
          <p className="text-amber-400 italic text-xl">"No Better Address!"</p>
        </div>
      </div>
    </section>
  );
}
